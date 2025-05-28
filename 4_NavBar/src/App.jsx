import { useEffect, useState } from 'react'

function App() {
  const [CurrentPage, setCurrentPage] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loader, setloader] = useState(true);        // showing loading while fetching data from server

  useEffect(function () {
    setloader(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + CurrentPage)
      .then(async res => {
        const json = await res.json();
        setTabData(json)
      });
    setloader(false);
  }, [CurrentPage]);

  return (
    <>
      <button onClick={function () {            // highlighting the selected button
        setCurrentPage(1)
      }} style={{ color: CurrentPage == 1 ? "red" : "black" }}>Home</button>
      <button onClick={function () {
        setCurrentPage(2)
      }} style={{ color: CurrentPage == 2 ? "red" : "black" }}>Notifications</button>
      <button onClick={function () {
        setCurrentPage(3)
      }} style={{ color: CurrentPage == 3 ? "red" : "black" }}>message</button>
      <button onClick={function () {
        setCurrentPage(4)
      }} style={{ color: CurrentPage == 4 ? "red" : "black" }}>Jobs</button>


      <p>{loader ? "loading...." : tabData.title}</p>
    </>
  )
}

export default App

/*
***** Children - it is used when we are passing down the varaibles in component.

import React from 'react';

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
};

export default App;

*/

/*
 * keys - it is used to unqiuely identifies the component's children . it must be unique.
 * class based components - it is the older version of writing components (didnt use hooks , have render() to show the data on webpage , different to create a state variable)
 * lifeCycle events - they are the used in class based components to manage the task like data fetching,
                    subscriptions, cleaningup.(component mounted , unmounted , updated).
                     In functional based components it is same as useEffect.
 * Error Boundary - It is an class based component which is used to prevent the webpage to crash by
                    a single/multiple component error.
                    Just wrap your component call with the errorboundry component to prevent the whole webpage to crash.  
                    It just shows a error message in that particular component where the error occurs.
 * Fragment - it is just a parent element which is used to wrapup the whole webpage.
              e.g. <> </>  or we use <Fragment></Fragment>            
*/