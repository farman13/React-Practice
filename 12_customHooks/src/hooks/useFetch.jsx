import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);  // initially loading is true.

    console.log("Entering useFetch");

    async function fetchData() {
        console.log("fetching data");
        setLoading(true);
        const res = await fetch(url);
        const result = await res.json();
        setPost(result);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [url])

    /*    This is for fetching data after every 10 seconds after first mount so that we can see the updated data
       useEffect(() => {
           let clock = setInterval(fetchData, 10 * 1000);
   
           return () => {
               clearInterval(clock);
           }
       }, [])
       */

    console.log("Returning");
    return { post, loading };
}
export default useFetch;

// code inside useEffect will run after it returns.
// useEffect code is run after the component is rendered.
//NOTE :In react 18+ it batches the all state changes occurs inside a async function and then updates the state at once.
//        that's why we are not able to see the updated state in the console.log() statement.
//         so three state changes = only one re-render. 
