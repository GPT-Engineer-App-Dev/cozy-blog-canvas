import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const blogPosts = {
  1: {
    title: "My First Blog Post",
    content: "This is the beginning of my blogging journey. I'm excited to share my thoughts and experiences with you all. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-03-15"
  },
  2: {
    title: "Reflections on React",
    content: "React has revolutionized the way we build web applications. Its component-based architecture and virtual DOM have made it easier to create interactive UIs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-03-20"
  },
  3: {
    title: "The Power of Tailwind CSS",
    content: "Tailwind CSS has changed my approach to styling. Its utility-first approach allows for rapid development and easy customization. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-03-25"
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-blue-500 hover:underline mb-4">
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <p>{post.content}</p>
      </article>
    </div>
  );
};

export default BlogPost;
