import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div style={{ fontSize: "50px" }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route path='/' element={<Landing />} />
              <Route path='/neet/class-11' element={<Class11Component />} />
              <Route path='/neet/class-12' element={<Class12Component />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

function Layout() {
  return (
    <>
      Header - <Link to='/' > Home </Link> |
      <Link to='/neet/class-11' > class 11 </Link> |
      <Link to='/neet/class-12' > class 12 </Link>

      <Outlet />

      <br></br>
      Footer
    </>
  )
}

function Landing() {
  return (
    <>
      <br></br>
      hello from Landing Page!
    </>
  )
}

function Class11Component() {
  return (
    <>
      <br></br>
      Hello From Class 11!
    </>
  )
}


// using UseNavigate hook inside it
function Class12Component() {

  const navigate = useNavigate();

  function home() {
    navigate('/');
  }
  return (
    <>
      <br></br>
      Hello From Class 12 !

      <button onClick={home}> Go to landing page </button>
    </>
  )
}

// Error Component (No page)
function NoPage() {

  return (
    <>
      <br></br>
      This page is not exist plzz Go to Home Page !
      <Link to='/' element={<Landing />} >Go Home</Link>
    </>
  )
}
export default App


// plzz see this first and uncomment it for better understanding , above is the code with layout functionality of header and footer
/*** Code before layouting 
 
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
      <div style={{ fontSize: "50px" }}>

        <BrowserRouter>
    // These three lines are showed on all the pages 
          <Link to='/' > Home </Link> |
          <Link to='/neet/class-11' > class 11 </Link> |
          <Link to='/neet/class-12' > class 12 </Link>

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/neet/class-11' element={<Class11Component />} />
            <Route path='/neet/class-12' element={<Class12Component />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

function Landing() {
  return (
    <>
      <br></br>
      hello from Landing Page!
    </>
  )
}

function Class11Component() {
  return (
    <>
      <br></br>
      Hello From Class 11!
    </>
  )
}


// using UseNavigate hook inside it
function Class12Component() {

  const navigate = useNavigate();

  function home() {
    navigate('/');
  }
  return (
    <>
      <br></br>
      Hello From Class 12 !

      <button onClick={home}> Go to landing page </button>
    </>
  )
}

// Error Component (No page)
function NoPage() {

  return (
    <>
      <br></br>
      This page is not exist plzz Go to Home Page !
      <Link to='/' >Go Home</Link>
    </>
  )
}
export default App

*/