import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
    };
    onAddProduct(newProduct);

  
    setFormData({
      title: '',
      image: '',
      price: '',
      category: '',
    });

    alert('Product added successfully!');
  };

  return (
    <div style={{ padding: '2rem', backgroundImage:'url("https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-04.jpg")' , minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', color: 'white', marginBottom: '2rem' }}>
        Add New Product
      </h1>
      <form
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          backgroundColor: 'white',
          opacity:'0.8',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Product Name</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter product name"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'crimson',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
