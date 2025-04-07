import axios from 'axios';

export const fetchProducts = async (searchTerm = '', page = 1) => {
    let url = '';
    if (searchTerm) {
        url = `/api/cgi/search.pl?search_terms=${searchTerm}&page=${page}&json=true`;
    } else {
        url = `/api/cgi/search.pl?page=${page}&json=true`;
    }
    const response = await axios.get(url);
    return { products: response.data.products || [] };
};

// ✅ Add this missing function
export const fetchProductByBarcode = async (barcode) => {
    const url = `/api/api/v0/product/${barcode}.json`;
    const response = await axios.get(url);
    return response.data;
};
