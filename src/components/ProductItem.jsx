import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.code}`);
    };

    return (
        <div onClick={handleClick} className="border rounded p-4 cursor-pointer hover:shadow-lg">
            <img
                src={product.image_front_url || '/assets/placeholder.png'}
                alt={product.product_name}
                className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{product.product_name}</h2>
            <p>{product.categories}</p>
            {product.ingredients_text && <p className="text-sm">{product.ingredients_text}</p>}
            <p>Nutritional Grade: {product.nutrition_grades || 'N/A'}</p>
        </div>
    );
};

export default ProductItem;
