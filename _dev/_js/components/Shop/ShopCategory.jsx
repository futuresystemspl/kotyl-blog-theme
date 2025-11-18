import React from "react";
import ProductsList from "../Product/ProductsList";
import DataContext from "../DataContext";
import Button from "../Button";

class ShopCategory extends React.Component {
    render() {
        const data = this.context;
        const headerText = this.props.headerText;
        const categoryUrl = this.props.categoryUrl ? this.props.categoryUrl : data.url;

        if (data.products.length == 0) return null;

        return (
            <>
                {this.props.showHeader != false && (
                    <div className="section__header text--center">
                        <h4>{wp_core.i18n.title_products}</h4>
                        <h3>
                            <a href={categoryUrl}>{headerText ? <span>{headerText}</span> : <span>{data.name}</span>}</a>
                        </h3>
                    </div>
                )}

                {this.props.showCta == true && data.products.length > 0 && (
                    <div className="section__cta">
                        <Button cssClass="button--compact" url={categoryUrl} label={wp_core.i18n.cta_store} />
                    </div>
                )}

                <div className="section__body">
                    <ProductsList />
                </div>
            </>
        );
    }
}
ShopCategory.contextType = DataContext;

export default ShopCategory;
