import { UI } from "./ui";
import { Render } from "./render";

document.addEventListener("DOMContentLoaded", () => {
    UI.init();
    UI.nav.bind();
    UI.sidebar.bind();
    UI.tabs.bind();
    //UI.gallery.init();
    UI.player.bind();
    UI.video.bind();
    UI.modal.bind();
});

window.addEventListener("resize", () => {
    UI.init();
});

/**
 * Render React microfrontends components
 */
Render.shopCategory(".shop-category", wp_core.rest.shop_api);
