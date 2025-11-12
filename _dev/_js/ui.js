import { viewport } from './ui/viewport';
import { nav } from "./ui/nav";
import { sidebar } from "./ui/sidebar";
import { tabs } from "./ui/tabs";
//import { gallery } from "./ui/gallery";
import { player } from "./ui/player";
import { video } from "./ui/video";
import { modal } from "./ui/modal";

export let UI = {

    mobile : /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
    debug: true,
    localStorage: window.localStorage,

    // calculate and store viewport dimensions
    // this method will be bound to window resize event so try not to overload it
    init: function () {

        viewport.init();

        if (this.debug) console.log("Window width: " + viewport.windowWidth + ", Window height: " + viewport.windowHeight);
    },
    viewport,
    nav,
    sidebar,
    tabs,
    //gallery,
    player,
    video,    
    modal,
}
