import React from 'react';
import ProductsList from '../Product/ProductsList';
import DataContext from '../DataContext';
import Button from '../Button';

class ShopCategory extends React.Component {

    render() {

        const data = this.context;
        const headerText = this.props.headerText;
        const categoryUrl = this.props.categoryUrl ? this.props.categoryUrl : data.url;

        if(data.products.length == 0) return null;

        return (
            <div className="section__grid">
               
                {this.props.showHeader != false && 
                    <div className="section__header">
                        <h4>{wp_core.i18n.title_products}</h4>
                        <h2>
                            <a href={categoryUrl}>
                                {headerText 
                                    ? <span>{headerText}</span>
                                    : <span>{data.name}</span>
                                }
                            </a>
                        </h2>
                    </div>
                }

                <div className="section__body">
                    <ProductsList />
                </div>

                {this.props.showCta == true && data.products.length > 0 &&
                    <div className="section__cta">
                        <Button cssClass="button--transparent button--center" url={categoryUrl} label={wp_core.i18n.cta_store} />
                    </div>
                }

            </div>

        );
    }
}	
ShopCategory.contextType = DataContext;

export default ShopCategory;
