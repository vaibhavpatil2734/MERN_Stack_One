import React, { useState, useEffect } from 'react';

export default function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogTimestamp, setBlogTimestamp] = useState('');
  const [blogImage, setBlogImage] = useState('');

  // Load blogs from localStorage when component mounts
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogData(savedBlogs);
  }, []);

  const saveBlogsToLocalStorage = (blogs) => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  };

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleCreateBlog = () => {
    const newBlog = {
      title: blogTitle,
      content: blogContent,
      timestamp: blogTimestamp,
      image: blogImage
    };
    const updatedBlogs = [...blogData, newBlog];
    setBlogData(updatedBlogs);
    saveBlogsToLocalStorage(updatedBlogs);
    setIsCreating(false);
    // Reset form inputs
    setBlogTitle('');
    setBlogContent('');
    setBlogTimestamp('');
    setBlogImage('');
  };

  const handleDeleteBlog = (index) => {
    const updatedBlogs = [...blogData];
    updatedBlogs.splice(index, 1); // Remove the blog post at the specified index
    setBlogData(updatedBlogs);
    saveBlogsToLocalStorage(updatedBlogs);
  };

  return (
    <div className='mt-5'>
      <button className="btn btn-outline-light m-5" onClick={handleCreateClick} >
        Create New Blog
      </button>

      {isCreating && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Blog</h5>
                <button type="button" className="close" onClick={() => setIsCreating(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="blogTitle">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="blogTitle"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="blogContent">Content</label>
                  <textarea
                    className="form-control"
                    id="blogContent"
                    rows="3"
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="blogImage">Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="blogImage"
                    value={blogImage}
                    onChange={(e) => setBlogImage(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="blogTimestamp">Timestamp</label>
                  <input
                    type="text"
                    className="form-control"
                    id="blogTimestamp"
                    value={blogTimestamp}
                    onChange={(e) => setBlogTimestamp(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleCreateBlog}>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {blogData.map((blog, index) => (
        <div key={index} className="card mb-3">
          <img src={blog.image} className="card-img-top" alt="Blog Image" />
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.content}</p>
            <p className="card-text">
              <small className="text-muted">{blog.timestamp}</small>
            </p>
            <button className="btn btn-danger" onClick={() => handleDeleteBlog(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
