import React, { useState } from 'react';
import { fetchProductByBarcode } from '../services/api';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from './SkeletonLoader';
import ProductItem from './ProductItem';

const BarcodeSearch = () => {
    const [barcode, setBarcode] = useState('');
    const { data, isLoading, isError, refetch } = useQuery(
        ['barcodeProduct', barcode],
        () => fetchProductByBarcode(barcode),
        {
            enabled: false,
        }
    );

    const handleSearch = () => {
        if (barcode.trim()) {
            refetch();
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Barcode Search</h1>
            <div className="flex space-x-2">
                <input
                    type="text"
                    placeholder="Enter barcode"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                    className="p-2 border rounded flex-grow"
                />
                <button onClick={handleSearch} className="px-4 py-2 bg-green-500 text-white rounded">
                    Search
                </button>
            </div>
            <div className="mt-4">
                {isLoading && <SkeletonLoader />}
                {isError && <div>Error fetching product.</div>}
                {data && data.status === 1 ? (
                    <ProductItem product={data.product} />
                ) : data && data.status === 0 ? (
                    <div>No product found for barcode {barcode}</div>
                ) : null}
            </div>
        </div>
    );
};

export default BarcodeSearch;
