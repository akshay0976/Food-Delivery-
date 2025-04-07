import { useRef } from 'react';

const useDebounce = (callback, delay) => {
    const timer = useRef(null);

    const debouncedFunction = (...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };

    return debouncedFunction;
};

export default useDebounce;
