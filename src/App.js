import './App.css';
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
import Remove from './Remove'
import View from './View'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// function App() {
  // return (
  //     <>
  //       <div id='box'>
  //          <h1>Hotel Room Booking System</h1>
  //          <div id='maincontent'>
  //             <button onClick={BookRoom}>Book a Room</button>
  //             <button onClick={Update}>Update Details</button>
  //             <button onClick={DeleteBooking}>Delete Bookings</button>
  //             <button onClick={ViewBooking}>View Bookings</button>
  //          </div>
  //       </div>
  //     </>
  // );

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="create" element={<Create/>}/>
            <Route path="edit" element={<Edit />} />
            <Route path="remove" element={<Remove />} />
            <Route path="view" element={<View />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
