import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { FaFaucetDrip } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";

const Advertisement = () => {
  return (
    <div className="grid grid-cols-4 gap-3 max-w-7xl mx-auto">
      <div className="card bg-amber-400 shadow-xl">
        <div className="card-body">
          <div className="flex space-x-8">
            <div>
              <GiOpenBook size={40} />
            </div>
            <div>
              <h2 className="card-title">Education</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card  bg-amber-400  shadow-xl">
        <div className="card-body">
          <div className="flex space-x-8">
            <div>
              <FaFaucetDrip size={40} />
            </div>
            <div>
              <h2 className="card-title">Clean Water</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card  bg-amber-400  shadow-xl">
        <div className="card-body">
          <div className="flex space-x-8">
            <div>
              <FaPlusCircle size={40} />
            </div>
            <div>
              <h2 className="card-title">Health Care</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card  bg-amber-400  shadow-xl">
        <div className="card-body">
          <div className="flex space-x-8">
            <div>
            <FaPeopleRoof size={40}/>
            </div>
            <div>
              <h2 className="card-title">Community</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
