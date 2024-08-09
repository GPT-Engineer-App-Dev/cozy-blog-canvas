import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  { id: 1, title: "My First Blog Post", excerpt: "This is the beginning of my blogging journey...", date: "2023-03-15", category: "Personal" },
  { id: 2, title: "Reflections on React", excerpt: "React has revolutionized the way we build web applications...", date: "2023-03-20", category: "Technology" },
  { id: 3, title: "The Power of Tailwind CSS", excerpt: "Tailwind CSS has changed my approach to styling...", date: "2023-03-25", category: "Web Development" },
  { id: 4, title: "My Favorite Books of 2023", excerpt: "A curated list of the best books I've read this year...", date: "2023-04-01", category: "Books" },
  { id: 5, title: "Exploring Machine Learning", excerpt: "An introduction to the fascinating world of ML...", date: "2023-04-05", category: "Technology" },
];

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Personal Blog</h1>
      <p className="text-xl text-gray-600 mb-8">Sharing my thoughts on technology, books, and life.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <span className="text-sm text-blue-500">{post.category}</span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Button asChild>
                <Link to={`/post/${post.id}`}>Read more</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
