import React, { useState } from 'react';
import FeedCard from '../components/common/FeedCard';
import HeaderBar from '../components/common/HeaderBar';
import CreatePostCard from '../components/common/CreatePostCard';
import Sidebar from '../components/layout/SideBar';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'john_doe',
      time: '2h ago',
      content: 'This is my first post here!',
      likes: 12,
      comments: 3,
      reposts: 1
    },
    {
      id: 2,
      username: 'jane_smith',
      time: '1h ago',
      content: 'Loving this platform already 🔥',
      likes: 22,
      comments: 5,
      reposts: 0
    }
  ]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <HeaderBar />
      </div>

      <div className="flex pt-16"> {/* Padding top to offset fixed header */}
        {/* Sidebar */}
        <div className="w-64 min-h-screen border-r hidden sm:block">
          <Sidebar />
        </div>

        {/* Main Feed Content */}
        <main className="flex-1 max-w-2xl mx-auto px-4 py-6">
          <CreatePostCard onPost={handleNewPost} />
          {posts.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
};

export default Feed;
