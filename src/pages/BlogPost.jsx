import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const blogPosts = {
  1: {
    title: "My First Blog Post",
    content: "This is the beginning of my blogging journey. I'm excited to share my thoughts and experiences with you all. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-03-15",
    category: "Personal"
  },
  2: {
    title: "Reflections on React",
    content: "React has revolutionized the way we build web applications. Its component-based architecture and virtual DOM have made it easier to create interactive UIs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-03-20",
    category: "Technology"
  },
  3: {
    title: "The Power of Tailwind CSS",
    content: "Tailwind CSS has changed my approach to styling. Its utility-first approach allows for rapid development and easy customization. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-03-25",
    category: "Web Development"
  },
  4: {
    title: "My Favorite Books of 2023",
    content: "A curated list of the best books I've read this year. From fiction to non-fiction, these books have shaped my thinking and provided hours of enjoyment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2023-04-01",
    category: "Books"
  },
  5: {
    title: "Exploring Machine Learning",
    content: "An introduction to the fascinating world of Machine Learning. We'll cover basic concepts and explore some practical applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2023-04-05",
    category: "Technology"
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
      <Button asChild variant="outline" className="mb-4">
        <Link to="/" className="flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
      </Button>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <div className="flex justify-between items-center text-gray-500 mb-4">
          <span>{post.date}</span>
          <span className="text-blue-500">{post.category}</span>
        </div>
        <p>{post.content}</p>
      </article>
    </div>
  );
};

export default BlogPost;
