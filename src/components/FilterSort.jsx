import React from 'react';

const FilterSort = () => {
    return (
        <div className="my-4 flex space-x-4">
            <select className="p-2 border rounded">
                <option value="">Filter by Category</option>
                <option value="Beverages">Beverages</option>
                <option value="Dairy">Dairy</option>
                <option value="Snacks">Snacks</option>
            </select>
            <select className="p-2 border rounded">
                <option value="">Sort By</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="nutrition-asc">Nutrition Grade Asc</option>
                <option value="nutrition-desc">Nutrition Grade Desc</option>
            </select>
        </div>
    );
};

export default FilterSort;
