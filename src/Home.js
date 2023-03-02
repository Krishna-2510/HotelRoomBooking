import { Outlet, Link } from "react-router-dom";
import React from "react";
import { ReactDOM} from "react";
import './Createcss.css'

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/create">Book Room</Link>
          </li>
          <li>
            <Link className="link" to="/edit">Update Details</Link>
          </li>
          <li>
            <Link className="link" to="/remove">Delete Booking</Link>
          </li>
          <li>
            <Link className="link" to="/view">View Bookings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Home;