import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">My Blog</Link>
        <div className="flex space-x-4">
          <Button asChild variant="ghost">
            <Link to="/" className="flex items-center">
              <Home className="mr-2" size={20} />
              Home
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/categories" className="flex items-center">
              <BookOpen className="mr-2" size={20} />
              Categories
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/search" className="flex items-center">
              <Search className="mr-2" size={20} />
              Search
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
