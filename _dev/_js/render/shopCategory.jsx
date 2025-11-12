import React from "react";
import { createRoot } from "react-dom/client";

import DataProvider from "../components/DataProvider";
import ShopCategory from "../components/Shop/ShopCategory";

export default function shopCategory(selector, api_url) {
    if (document.querySelector(selector) == null) return;

    //component can have multiple roots and can be rendered multiple times on a single page
    let nodes = document.querySelectorAll(selector);

    nodes.forEach((node) => {
        let url = new URL(api_url + "category");

        const id_category = node.dataset.categoryId != undefined ? node.dataset.categoryId : 12;
        const showHeader = node.dataset.showHeader == "false" ? false : true;
        const showCta = node.dataset.showCta == "false" ? false : true;
        const categoryUrl = node.dataset.url != undefined ? node.dataset.url : false;
        const headerText = node.dataset.headerText != undefined ? node.dataset.headerText : false;

        url.searchParams.append("id", parseInt(id_category));
        url.searchParams.append("products", true);

        // Create a root for each node
        const root = createRoot(node);

        root.render(
            <DataProvider api_url={url}>
                <ShopCategory showHeader={showHeader} headerText={headerText} showCta={showCta} categoryUrl={categoryUrl} />
            </DataProvider>
        );
    });
}
