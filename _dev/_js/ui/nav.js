import { UI } from "../ui";

export let nav = {
    //selectors
    headerSelectorId: "header-top",
    navSelectorId: "nav-top-menu",
    buttonSelector: ".do-toggle-nav",

    //classes
    submenuClass: "submenu__categories",
    hasSubmenuClass: "item--has-submenu",
    toggleSubmenuClass: "do-toggle-submenu",
    openClass: "menu--open",

    bind: function () {
        let nav = document.getElementById(this.navSelectorId);
        let buttons = document.querySelectorAll(this.buttonSelector);

        /*
         *	1. bind menu UI button
         */
        if (buttons === null) return;

        buttons.forEach(button => {
            button.addEventListener("click", (event) => {
                this.toggleMenu();
                event.preventDefault();
            });
        })

        /*
         *	2. bind navigation links with different logic regarding submenu based
         *	on current viewport width
         */
        if (nav === null) return;

        let navLinks = nav.querySelectorAll("a");

        navLinks.forEach(item => {
            let li = item.parentNode;

            /**
             * we are binding separate events regardless to viewport width
             * because we want to seamlessly switch between desktop and mobile via resizing without the need to re-bind anything;
             * we check against viewport width later
             */

            if (li.classList.contains(this.hasSubmenuClass) || item.classList.contains(this.toggleSubmenuClass)) {
                // 1. bind click event to <a> on mobile
                item.addEventListener("click", (event) => {
                    //console.log(UI.viewport.windowWidth);

                    if (UI.viewport.windowWidth <= 960) {

                        // Fail state: binded li is nested in the tree (i.e. "back item") so we need to traverse up
                        if(!li.classList.contains(this.hasSubmenuClass)) li = li.closest(`li.${this.hasSubmenuClass}`)

                        this.toggleSubmenu(li);
                        event.preventDefault();
                    } else if (UI.viewport.windowWidth > 960) {
                        //on desktop toggle submenu only for highest level (not submenu)
                        if (!li.closest("ul").classList.contains(this.submenuClass)) {
                            this.toggleSubmenu(li);
                            event.preventDefault();
                        }
                    }
                });               

            }
            
        });      

    },

    /**
     * toggle mobile menu
     */
    toggleMenu: function () {
        let menu = document.getElementById(this.navSelectorId);
        let button = document.querySelector(this.buttonSelector);

        menu.classList.toggle(this.openClass);
        button.classList.toggle(this.openClass);

        // on mobile, after closing menu let's reset all submenus, so when user reopens it will be at top level
        if(UI.viewport.windowWidth < 960 && !menu.classList.contains(this.openClass)) {
            this.resetMenu();
        }
    },

    toggleSubmenu: function (el) {
        el.classList.toggle(this.openClass);
        this.closeSiblings(el);
    },

    openSubmenu : function(el) {
        el.classList.add(this.openClass);
        this.closeSiblings(el);
    },

    closeSubmenu : function(el) {
        el.classList.remove(this.openClass);
        this.closeSiblings(el);
    },

    resetMenu: function () {
        let menu = document.getElementById(this.navSelectorId);
        let button = document.querySelector(this.buttonSelector);

        menu.classList.remove(this.openClass);
        button.classList.remove(this.openClass);

        let openMenuItems = menu.querySelectorAll("." + this.openClass);

        openMenuItems.forEach((item) => {
            item.classList.remove(this.openClass);
        });
    },

    closeSiblings : function(el) {
        let parent = el.parentNode;

        //select siblings based on current <li>
        let siblings = Array.prototype.filter.call(parent.children, function (child) {
            return child !== el;
        });

        //remove open class from siblings
        siblings.forEach((sibling) => {
            sibling.classList.remove(this.openClass);
        });        
    }

};
