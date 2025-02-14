import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const ProductCard = ({ product, onAddToCart }) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardMedia
      component="img"
      height="200"
      image={product.image}
      alt={product.title}
      sx={{ objectFit: "cover" }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h6" component="div" noWrap>
        {product.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {product.description}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <Chip label={product.category} size="small" />
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </div>
    </CardContent>
    <CardActions>
      <Button
        fullWidth
        variant="contained"
        startIcon={<AddShoppingCart />}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </Button>
    </CardActions>
  </Card>
);

export default ProductCard;
