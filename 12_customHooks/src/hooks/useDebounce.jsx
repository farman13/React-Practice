import { useRef } from "react";

const useDebounce = (originalFunc) => {
    const currentClock = useRef();

    function fn() {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalFunc, 2000);   // starts new fresh clock when user continously typing
    }

    return fn;
}

export default useDebounce;