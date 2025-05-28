import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {

    const [debounceValue, setdebounceValue] = useState(value);

    useEffect(() => {

        const clock = setTimeout(() => {
            setdebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(clock);
        }
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;