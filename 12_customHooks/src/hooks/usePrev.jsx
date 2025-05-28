import { useEffect, useRef } from "react";

const usePrev = (value) => {
    const prev = useRef(0);      // uses useRef hook as it will not re-render the component when its value changes

    useEffect(() => {
        prev.current = value;
    }, [value])

    return prev.current;
}

export default usePrev;

// the useEffect hook will execute after the component/function return its value.