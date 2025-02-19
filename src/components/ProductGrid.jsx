import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return null; // or a loading spinner, message, etc.
  }

  return (
    <Grid container spacing={3} padding={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
