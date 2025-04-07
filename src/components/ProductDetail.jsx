import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductByBarcode } from '../services/api';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from './SkeletonLoader';

const ProductDetail = () => {
    const { barcode } = useParams();
    const { data, isLoading, isError } = useQuery(
        ['productDetail', barcode],
        () => fetchProductByBarcode(barcode)
    );

    if (isLoading) return <SkeletonLoader />;
    if (isError || data.status === 0) return <div>Error fetching product details.</div>;

    const product = data.product;

    return (
        <div className="container mx-auto p-4">
            <button onClick={() => window.history.back()} className="mb-4 text-blue-500">Back</button>
            <div className="flex flex-col md:flex-row">
                <img
                    src={product.image_front_url || '/assets/placeholder.png'}
                    alt={product.product_name}
                    className="w-full md:w-1/2 object-cover"
                />
                <div className="md:ml-4">
                    <h1 className="text-3xl font-bold">{product.product_name}</h1>
                    <p><strong>Categories:</strong> {product.categories}</p>
                    <p><strong>Ingredients:</strong> {product.ingredients_text}</p>
                    <p><strong>Nutritional Grade:</strong> {product.nutrition_grades || 'N/A'}</p>
                    <p className="mt-2 font-semibold">Nutrition Facts:</p>
                    {product.nutriments ? (
                        <ul>
                            {Object.entries(product.nutriments).map(([key, value]) => (
                                <li key={key}>{key}: {value}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No nutrition data available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
