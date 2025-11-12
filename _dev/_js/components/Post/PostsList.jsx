import React from 'react';
import PostItem from './PostItem';
import DataContext from '../DataContext';

function PostsList(props) {

    const data = useContext(DataContext);

    let postType = props.cpt ? props.cpt : 'post';

    let cssClass = postType + '__list';

    return (
        <ul className={cssClass}>
            {data.map((post, index) =>
                <PostItem key={post.id} data={post} index={index} postType={postType} />
            )}				
        </ul>

    );
    
}	


export default PostsList;
