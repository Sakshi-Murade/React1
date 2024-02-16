import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const foodItems = [
  { id: 1, name: 'Burger', price: 5.99 },
  { id: 2, name: 'Pizza', price: 8.99 },
  { id: 3, name: 'Salad', price: 4.99 },
];

const FoodList = ({ addToCart }) => {
  return (
    <div className="food-list">
      {foodItems.map((food) => (
        <Card key={food.id} sx={{ maxWidth: 300, marginBottom: 2, backgroundColor: '#f0f0f0' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {food.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${food.price.toFixed(2)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => addToCart(food)} size="small" sx={{ backgroundColor: '#2196F3' }}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default FoodList;
