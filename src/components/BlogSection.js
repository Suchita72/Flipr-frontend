import React, { useState } from 'react';
import FeaturedPost from './FeaturedPost';
import PostList from './PostList';
import '../CssComponent/BlogSection.css';
import building from '../building.svg'

const BlogSection = () => {
    let[img,setImg]=useState(building)
  const featuredPost = {
    image: img,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'John Doe',
    date: 'May 23, 2022',
    description: 'Quis autem iure dolorem ipsum quia dolor sit amet consectetur adipisci velit...'
  };

  const allPosts = [
    { title: '8 Figma design systems that you can download for free today.', author: 'Alice Doe', date: 'Aug 29, 2023' },
    { title: '8 Figma design systems that you can download for free today.', author: 'Alice Doe', date: 'Aug 23, 2023' },
    { title: '8 Figma design systems that you can download for free today.', author: 'John Doe', date: 'Aug 23, 2021' },
    // Add more posts as needed
  ];

  return (
    <div className="blog-section">
      <FeaturedPost {...featuredPost} />
      <PostList posts={allPosts} />
    </div>
  );
};

export default BlogSection;
