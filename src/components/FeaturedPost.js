import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CssComponent/FeaturedPost.css';

const FeaturedPost = ({ id, image, title, author, date, description }) => {
  const navigate=useNavigate()
  const handleReadMore = () => {
    navigate(`/read`);
  };
  return (
    <div className="featured-post">
      <img src={image} alt="Post" className="featured-image" />
      <div className="post-content">
        <p className="author-date">
          By <span className="author-name">{author}</span> | {date}
        </p>
        <h2 className="post-title">{title}</h2>
        <p className="post-description">{description}</p>
        <button className="read-more" onClick={handleReadMore}>Read More &gt;</button>
      </div>
    </div>
  );
};

export default FeaturedPost;
