import { UI } from "../ui";

export let tabs = {
    selector: ".ui-tabs",
    tabSelector: ".item--tab",
    tabContentSelector: ".tab__content",
    navSelector: ".tabs__nav",
    buttonSelector: ".do-toggle-tab",
    classActive: "tab--open",
    settings: {
        animate: true, //open tab transition
        collapsable: true, //allow all tabs to be closed
        closeSiblings: false, //allow multiple tabs to be open at once
        openByDefault: false, //toggle first tab programatically
        resetOnResize: false, //close all tabs on resize
    },

    bind: function (selector = this.selector, settingsCustom = {}) {
        if (document.querySelector(selector) === null) return;

        //on Product page we have multiple tabs so either use querySelectorAll and iterate through each node, or use document.querySelector
        let tabsContainer = document.querySelector(selector);
        let settingsDefault = this.settings;
        let settings = { ...settingsDefault, ...settingsCustom };

        let buttons = tabsContainer.querySelectorAll(this.buttonSelector);

        

        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                let target = event.target;
                let li = target.closest("li");
                let tab = target.closest(this.tabSelector);

                if (UI.viewport.windowWidth > 960 && settings.collapsable === false) {
                    //we don't want to allow to collapse open tab
                    if (!li.classList.contains(this.classActive)) this.toggleTab(tabsContainer, target, tab, settings);
                } else {
                    this.toggleTab(tabsContainer, target, tab, settings);
                }

                event.preventDefault();
            });
        });

        if (settings.openByDefault === true && UI.viewport.windowWidth > 960) {
            //on desktop open default tab by simulating click event on first tab
            buttons[0].click();
        }

        if (settings.resetOnResize === true) {
            window.addEventListener("resize", () => {
                //reset only one time at a mobile/desktop breakpoint with some room of tolerance so the transition between horizontal and accordion tabs can be as smooth as possible; not entirely bulletproof, but erases most issues when playing with window size; for more perfect solution either cancel animation on mobile entirely or use separate active classes for desktop and mobile?
                if(UI.viewport.windowWidth > 900) this.reset(selector);
            });
        }        

    },

    toggleTab: function (container, target, tab, settings) {
        let tabsContainer = container
        let targetTabs = [];

        //check, if tab has ID
        let id_tab = target.dataset.idTab || tab.dataset.idTab;

        if (id_tab !== undefined) {
            //target both nav and content items (scenario when tab nav is separate from tab list)
            targetTabs = tabsContainer.querySelectorAll('[data-id-tab="' + id_tab + '"]');
        } else {
            //only one tab targeted by the click
            targetTabs.push(tab);
        }

        targetTabs.forEach((tab) => {
            if (settings.closeSiblings === true) this.closeSiblings(tab, settings);

            if (!tab.classList.contains(this.classActive)) {
                this.openTab(tab, settings);
            } else {
                this.closeTab(tab, settings);
            }
        });
    },

    openTab: function (tab, settings) {
        tab.setAttribute("data-collapsed", "false");
        tab.classList.add(this.classActive);

        //because we are using transition animation for toggling, we need to explicitly set height of the content for animation to be precise
        //get the height of the element's inner content, regardless of its actual size, including content not visible on the screen due to overflow
        if (settings !== undefined && settings.animate === true || UI.viewport.windowWidth < 960) {
            let tabContent = tab.querySelector(this.tabContentSelector);
            if(tabContent === null) return;
            let contentHeight = tabContent.scrollHeight;
            tabContent.style.maxHeight = contentHeight + "px";
        }
    },

    closeTab: function (tab, settings) {
        tab.setAttribute("data-collapsed", "true");
        tab.classList.remove(this.classActive);

        if (settings !== undefined && settings.animate === true || UI.viewport.windowWidth < 960) {
            let tabContent = tab.querySelector(this.tabContentSelector);
            if(tabContent === null) return;
            tabContent.removeAttribute("style");
        }
    },

    closeSiblings: function (tab) {
        let siblings = Array.prototype.filter.call(tab.parentNode.children, (child) => {
            return child !== tab;
        });

        //remove active class from siblings
        siblings.forEach((tab) => {
            this.closeTab(tab);
        });
    },

    // close all tabs
    reset: function (selector = this.selector) {

        let tabsContainer = document.querySelector(selector);
        let tabs = tabsContainer.querySelectorAll(this.tabSelector);

        tabs.forEach((tab, index) => {
            tab.classList.remove(this.classActive);
            this.closeTab(tab);
        });

        //on desktop open default tab by simulating click event on first tab
        if (UI.viewport.windowWidth > 960) tabs[0].querySelector("a").click();
    },    
};
