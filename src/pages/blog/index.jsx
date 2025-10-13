import { useLocation } from 'react-router-dom'
import BlogCard from '../../globalComponents/blogCards'

const Blog = () => {
  const { pathname } = useLocation()
  return (
    <div>
      <h1>Blog</h1>
      <BlogCard pathname={pathname} ></BlogCard>
    </div>
  )
}

export default Blog;
