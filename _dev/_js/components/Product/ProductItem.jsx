import React from "react";
//import ProductAttributes from "./ProductAttributes";
import { Tools } from "../../tools";

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.product = this.props.data;
    }

    renderPrice() {
        let product = this.product;

        if (product.reduction) {
            return (
                <React.Fragment>
                    <span className="price price--old">{Tools.formatCurrency(product.price_without_reduction, wp_core.currency)}</span>
                    <span className="price price--new">{Tools.formatCurrency(product.price, wp_core.currency)}</span>
                </React.Fragment>
            );
        } else {
            return <span className="price price--regular">{Tools.formatCurrency(product.price, wp_core.currency)}</span>;
        }
    }

    render() {
        let product = this.product;

        return (
            <li className="list__item item--product" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <meta itemProp="position" content={this.props.index} />
                <meta itemProp="image" content={product.images[0].bySize.large_default.url} />

                <a href={product.link}>
                    <figure className="item__image">
                        <picture className="iamge--cover image--primary">
                            <source media="(max-width: 480px)" srcSet={product.images[0].bySize.medium_default.url} />
                            <img loading="lazy" src={product.images[0].bySize.large_default.url} alt={product.legend} width="720" height="720" />
                        </picture>

                        {product.images.length > 1 && (
                            <picture className="image--cover image--secondary">
                                <source media="(max-width: 480px)" srcSet={product.images[1].bySize.medium_default.url} />
                                <img loading="lazy" src={product.images[1].bySize.large_default.url} alt={product.images[1].legend} width="720" height="720" />
                            </picture>
                        )}
                    </figure>
                </a>

                <div className="item__meta">
                    {product.discount_percentage && product.discount_percentage != 0 && (
                        <ul className="item__flags">
                            <li className="list__item item--flag flag--discount">
                                <span className="label">{wp_core.i18n.offer}</span>&nbsp;
                                <span className="value">{product.discount_percentage}</span>
                            </li>
                        </ul>
                    )}

                    <a href={product.link} itemProp="url">
                        <h3 className="product__name">{product.name}</h3>
                    </a>

                    {/* <ProductAttributes attributes={product.attributes} /> */}

                    {product.show_price > 0 && <div className="item__prices">{this.renderPrice()}</div>}
                </div>
            </li>
        );
    }
}

export default ProductItem;
