import React from 'react';

function PostItem(props) {

    const defaultCssClass = `list__item item--${props.postType}`;

    let cssClass = props.cssClass ? props.cssClass : defaultCssClass;

    const post = props.data;
    const cover = post.custom_data.cover;

    //Fail state for WordPress dashes and hyphens
    function renderText(text) {
        return {__html: text };
    }

    return(
        <li className={cssClass}>
            <a href={post.link}>   

                {cover &&
                    <figure className="post__cover cover cover--overlay">
                        <picture>
                            <source srcSet={cover.webp} type="image/webp" />
                            <source srcSet={cover.jpeg} type="image/jpeg" />
                            <img loading="lazy" src={cover.jpeg} width="720" height="480" alt={cover.alt} />
                        </picture>
                        <figcaption>{cover.caption}</figcaption>
                    </figure>
                }

                <h3 className="post__title" dangerouslySetInnerHTML={renderText(post.title.rendered)} /> 

            </a>
        </li> 

    )
       
}

export default PostItem;
