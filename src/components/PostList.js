import React from 'react';
import '../CssComponent/PostList.css';
import { useNavigate } from 'react-router-dom';
const PostList = ({ posts }) => {
  const navigate=useNavigate()
  const handleReadMore = () => {
    navigate(`/read`);
  };
  
  const handleAll = () => {
    navigate(`/blog`);
  };
 
  return (
    <div className="post-list" >
      <h2>All Posts</h2>
      <div className="view-all" onClick={handleAll} >View All</div>
      {posts.map((post, index) => (
        <div key={index} className={`post-item ${index === 1 ? 'highlighted' : ''}`} onClick={handleReadMore}>
          <p className="author-date">
            By <span className="author-name">{post.author}</span> | {post.date}
          </p>
          <h3 className="post-title">{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PostList;
