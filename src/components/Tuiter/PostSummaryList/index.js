import React from 'react';
import PostSummaryItem from './PostSummaryItem';
import po from './PostSummaryList.json'

const PostSummaryList = () => {
    return (
    <ul className={`list-group`}>
            {po.map((post) => {
              return <PostSummaryItem post = {post}/>;
            })}

        </ul>
    );
}
export default PostSummaryList;