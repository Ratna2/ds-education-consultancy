"use client";

import Image from "next/image";
import { useState } from "react";

type Blog = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  featured?: boolean;
};

const blogs: Blog[] = [
  {
    title: "Education Consultant in Guwahati",
    excerpt:
      "We are one of the top education consultants in Guwahati helping students choose the right career path.",
    image: "/blogs/blog1.jpg",
    date: "Jan 21, 2025",
    category: "Consulting",
    featured: true,
  },
  {
    title: "Career Counselling in Agartala, Tripura",
    excerpt:
      "Professional admission consultancy services in Agartala to guide students toward success.",
    image: "/blogs/blog2.jpg",
    date: "Feb 21, 2025",
    category: "Career",
  },
  {
    title: "Find the Best Colleges in Kolkata",
    excerpt:
      "Discover top universities and colleges in Kolkata with expert guidance and counselling.",
    image: "/blogs/blog3.jpg",
    date: "Mar 01, 2025",
    category: "Colleges",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#6366f1,transparent_60%)]" />

        <div className="relative z-10">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full animate-pulse">
            📚 Insights & Updates
          </div>

          <h1 className="text-4xl font-bold text-slate-800">
            Read Our Blogs
          </h1>

          <p className="text-slate-500 mt-3">
            Get updated with our most curated content
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 animate-fade">

        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-500 overflow-hidden group"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {blog.category}
              </div>

              {/* Featured badge */}
              {blog.featured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-xs px-3 py-1 rounded-full font-semibold shadow">
                  ⭐ Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Date */}
              <div className="text-xs text-slate-400 mb-2">
                {blog.date}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-600 mb-4">
                {blog.excerpt}
              </p>

              {/* Button */}
              <button
                onClick={() => window.location.href = "/contact"}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fade {
          animation: fade 0.5s ease;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}