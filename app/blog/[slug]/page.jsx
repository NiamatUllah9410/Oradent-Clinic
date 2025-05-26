import blogs from "@/component/data/blogs";
import BlogPost from '@/component/blogs/BlogPost';
import { notFound } from 'next/navigation';

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug); // Match slug

  if (!blog) return notFound(); // If not found, show 404

  return <BlogPost blog={blog} />; // Pass full blog data to BlogPost component
}
