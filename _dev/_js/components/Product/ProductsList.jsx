import React from 'react';
import ProductItem from './ProductItem';
import DataContext from '../DataContext';

class ProductsList extends React.Component {

    render() {

        const data = this.context;
        const products = data.products;

        return (
            <ul className="products-list">
                {products.map((product, index) =>
                    <ProductItem key={product.id_product} data={product} index={index} />
                )}				
            </ul>

        );
    }
}	
ProductsList.contextType = DataContext;

export default ProductsList;
