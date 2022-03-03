import React from 'react';
import PostList from "./PostList.json"
import PostItem from "./PostItem";

const PosIndex = () => {
  return (
    <ul class="list-group ">
            {PostList.map((post) => {
              return <PostItem post={post} key={post.userName} />;
            })}
      </ul>
  );
};

export default PosIndex;

