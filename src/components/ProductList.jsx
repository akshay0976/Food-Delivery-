import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';
import ProductItem from './ProductItem';
import SkeletonLoader from './SkeletonLoader';
import SearchBar from './SearchBar';
import FilterSort from './FilterSort';

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['products', searchTerm, page],
        queryFn: () => fetchProducts(searchTerm, page),
        keepPreviousData: true,
    });


    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    };

    // Reset page on search change
    useEffect(() => {
        setPage(1);
        refetch();
    }, [searchTerm, refetch]);

    if (isError) return <div>Error loading products.</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Food Product Explorer</h1>
            <SearchBar onSearch={setSearchTerm} />
            <FilterSort />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {isLoading ? (
                    <>
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                    </>
                ) : (
                    data.products.map((product) => (
                        <ProductItem key={product.code} product={product} />
                    ))
                )}
            </div>
            {!isLoading && data && data.products.length > 0 && (
                <button
                    onClick={handleLoadMore}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default ProductList;
