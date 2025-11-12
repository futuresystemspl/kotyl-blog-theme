// video player based on YouTube iFrame API, see: https://developers.google.com/youtube/iframe_api_reference
export let player = {

	selectorComponent : '.video-component',
	selectorPlayer : '.video__player',
	selectorButton : '.do-play-video',

	player : null, //one player only

	init : function() {

		let tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
	    
	    let firstScriptTag = document.getElementsByTagName('script')[0];

	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
	},

	bind : function() {

		if( document.querySelector(this.selectorComponent) === null ) return;

		let self = this;

		//init youtube api 
		this.init();

		//bind video play logic to buttons
		let buttons = document.querySelectorAll(this.selectorButton);

		buttons.forEach( function(item) {

			item.addEventListener('click', function(event) {

				let parent = this.closest(self.selectorComponent);
				let videoId = parent.dataset.videoId;
				let player = parent.querySelector(self.selectorPlayer);


				if( parent.dataset.state === 'paused' ) {
					self.resume(videoId);
				} else {
					self.play(player, videoId);
				}

				event.preventDefault();

			});

		});			

	},

	play : function(player, videoId) {

		let self = this;
		
		let parent = player.closest(self.selectorComponent);

		//console.log(this.player);

		//update state immediately on button click rather than waiting for YT response,
		//at worst case scenario user will see yt preloader/buffering state but won't perceive
		//that "nothing is happeing"
		parent.dataset.state = 'started';

		this.player = new YT.Player(player, {
			videoId: videoId,
			width: '100%',
			height: '100%',
			playerVars: {
				controls: 1,
				autoplay: 1,
				rel: 0,
				showinfo: 0,
				modestbranding: 1
      		},
			events: {
				'onStateChange': function(event) {
					self.updateState(event, parent, self)
				}
			}	      		
		});


	},

	resume : function(videoId) {
		if(!this.player) return;

		this.player.playVideo();

	},

	destroy : function(videoId) {
		if(this.player === null) return;
		
		this.player.destroy();

		this.players = null;	

	},

	updateState : function(event, parent, self) {

		if( event.data == YT.PlayerState.PLAYING ) {
			parent.dataset.state = 'playing';
		}

		if( event.data == YT.PlayerState.PAUSED) {

			// //update state if video is paused but only after couple of second to avoid toggling back poster while interacting with progress bar
			setTimeout( function() {

				//check if video is still paused...

				if( self.player.getPlayerState() == YT.PlayerState.PAUSED ) {
					parent.dataset.state = 'paused';
				}

			}, 3000);
			
		}

		if( event.data == YT.PlayerState.ENDED ) {
			parent.dataset.state = 'ended';			
		}

	}

}