import { UI } from "../ui";

/**
 * Sidebar UI
 *
 * buttons need to have sidebarName specified as [data-sidebar-target] attribute, and sidebar itself
 * need to have sidebarName [data-sidebar-name] attribute; names should be unique
 */

export let sidebar = {
    selectorUI: ".sidebar",
    selectorButton: ".do-toggle-sidebar",
    classActive: "sidebar--active",

    bind: function () {
        let buttons = document.querySelectorAll(this.selectorButton);

        if (buttons === null) return;

        document.addEventListener("click", (event) => {
            const button = event.target.closest(this.selectorButton);
            if (button !== null) {
                sidebar = button.dataset.sidebarTarget;

                //modifier for sidebar related to viewport, i.e. cart
                let mobileOnly = button.classList.contains("sidebar--mobile") ? true : false;
                let desktopOnly = button.classList.contains("sidebar--desktop") ? true : false;

                if (mobileOnly && UI.viewport.windowWidth > 960) return false;
                if (desktopOnly && UI.viewport.windowWidth <= 960) return false;

                this.toggle(sidebar, event);

                event.stopPropagation();
                event.preventDefault();

            }
        });

        /**
         *  close UI by clicking on overlay
         *  take note that overlay is dynamically appended via JS, so we need to bind event to document
         */
        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("overlay--sidebar")) this.close();
        });
    },

    toggle: function (target) {
        let sidebar = document.querySelector(this.selectorUI + '[data-sidebar-name="' + target + '"]');

        sidebar.classList.contains(this.classActive) ? this.close(target) : this.open(target);

    },

    open: function (target) {
        let body = document.body;
        let sidebar = document.querySelector(this.selectorUI + '[data-sidebar-name="' + target + '"]');

        //create overlay
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.classList.add("overlay--sidebar");

        body.classList.add(this.classActive);

        body.appendChild(overlay);

        sidebar.classList.add(this.classActive);

        if(target === 'form') {
            if(typeof fbq === 'function') {
                console.log('sidebar form opened..');
                fbq('track', 'Contact');
            }
        }
    },

    close: function (target) {
        let body = document.body;
        let overlay = body.querySelector(".overlay--sidebar");

        /**
         * Scenario: target is not specified while clicking on overlay
         */
        let sidebar;

        if (target) {
            sidebar = document.querySelector(this.selectorUI + '[data-sidebar-name="' + target + '"]');
        } else {
            sidebar = document.querySelector(this.selectorUI + "." + this.classActive);
        }

        body.classList.remove(this.classActive);
        body.removeChild(overlay);

        sidebar.classList.remove(this.classActive);
    },
};
