import React from 'react';

const ProductAttributes = (props) => {

    const attributes = props.attributes;

    if( !attributes ) return null;

    //Size attribute group ID 1
    const group = attributes.groups['1'];

    let sizes = [];
    
    Object.keys(group.attributes).map( (attribute) => 
        sizes.push( { 
            'id' : attribute, 
            'label' : group.attributes[attribute],
            'available' : group.attributes_quantity[attribute] > 0 ? true : false,
        } )
    );
    
    //console.log(group)
    //console.log(sizes);

    return(
        <div className="product__attributes">
            <ul className="attributes__list">
                {sizes.map( (attribute, index) => 
                    <li key={index} className={`list__item item--attribute${!attribute.available ? ' attribute--sold-out' : ''}`}>
                        <span className="attribute__label">{attribute.label}</span>
                    </li>
                )}
            </ul>
        </div>

    )

}

export default ProductAttributes;