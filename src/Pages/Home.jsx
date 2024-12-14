import React from 'react';

const Home = ({ products }) => {
  return (
    <div style={{ padding: '2rem', backgroundImage: 'url("https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-04.jpg")', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', color: 'cornsilk', marginBottom: '2rem' }}>
        All Products
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              borderBlockColor:'black',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '200px', objectFit: 'contain' }}
            />
            <div style={{ marginTop: '1rem' }}>
              <h2
                style={{
                  fontSize: '1.2rem',
                  color: '#333',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                }}
              >
                {product.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '0.5rem' }}>
                {product.category}
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#4caf50',
                  fontWeight: 'bold',
                }}
              >
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
