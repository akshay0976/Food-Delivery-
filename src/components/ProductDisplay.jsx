import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ProductDisplay = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['product', '737628064502'],
        queryFn: () =>
            axios
                .get('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
                .then((res) => res.data),
    });

    if (isLoading) return <div>Loading product details...</div>;
    if (isError) return <div>Error loading product details.</div>;

    const product = data.product;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{product.product_name}</h1>
            <img
                src={product.image_front_url || '/assets/placeholder.png'}
                alt={product.product_name}
                className="w-full max-w-md object-cover mb-4"
            />
            <p>
                <strong>Ingredients:</strong> {product.ingredients_text || 'N/A'}
            </p>
            <p>
                <strong>Nutritional Grade:</strong> {product.nutrition_grades || 'N/A'}
            </p>
            <p>
                <strong>Categories:</strong> {product.categories || 'N/A'}
            </p>
        </div>
    );
};

export default ProductDisplay;
