import React from "react";
import "./Blog.css";

function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Tips for Sustainable Farming",
      excerpt: "Practice Crop Rotation: Rotate crops to improve soil health and reduce pests.Use Natural Pest Control: Adopt Integrated Pest Management to minimize chemicals.Conserve Water: Use efficient irrigation systems and harvest rainwater.Improve Soil Health: Add organic matter and reduce tilling.Adopt Renewable Energy: Use solar or wind power and recycle farm waste.",
    },
    {
      id: 2,
      title: "The Benefits of Organic Produce",
      excerpt: "Healthier: No synthetic pesticides or GMOs. Nutrient-Rich: Higher levels of vitamins and antioxidants. Eco-Friendly: Promotes soil health and reduces pollution. Biodiversity: Encourages natural ecosystems.",
    },
  ];

  return (
    <div className="blog" id="blog">
      <h2>Farm Blog</h2>
      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;