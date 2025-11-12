import { UI } from '../ui';

export let video = {

    selector: ".video",

    bind : function() {

        if (document.querySelector(this.selector) === null) return;

        let videos = document.querySelectorAll(this.selector);

        videos.forEach((video) => {
            let mobile = video.dataset.srcMobile;
            let desktop = video.dataset.srcDesktop;


            //load different video based on viewport (on page load only)
            if(UI.debug) console.log('updating main video src...')

            if(UI.viewport.windowWidth > 960) {

                video.src = desktop;

                if(UI.debug) console.log('current src is deskop: ' + video.src)

            } else {

                video.src = mobile;

                if(UI.debug) console.log('current src is mobile: ' + video.src)

            }

        })
        
    }

}