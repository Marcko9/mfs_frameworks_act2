import React, { useEffect, useState } from 'react'
import { Post } from './Post'
import { getPosts } from '../services/posts-service'

export const PostList = () => {

    const [posts, setPosts] = useState(null);
    useEffect(() => {
        getPosts().then((posts) => setPosts(posts));
    }, [])

    if(!posts){
        return <div>Loading...</div>
    }

  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
        {
            posts.map((post) => (
                <Post 
                key={post.id} 
                createdAt={post.createdAt} 
                autor={post.autor} 
                text={post.text} 
                comments={post.comments} 
                image={post.image} 
                likes={post.likes}
            />
        ))}


    </div>
  );
}
