import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Fundraising = () => {
  const [fundraisers, setFundraisers] = useState([]);
  useEffect(() => {
    const fetchFundraising = async () => {
      const response = await axios.get("http://localhost:5000/api/fundraisers");
      console.log(response);
      setFundraisers(response.data.data);
    };
    fetchFundraising()
  }, []);
  console.log(fundraisers);
  return (
    <div className="my-10">
    <h1 className="text-center text-3xl font-bold">Explore Fundraising Causes</h1>
    <p className="text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At, adipisci.
    </p>
    <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
      {fundraisers.map((fundraiser) => (
        <div key={fundraiser._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={fundraiser.thumbnail} alt="Shoes" className="h-55" />
          </figure>
          <div className="card-body bg-orange-100">
            <h2 className="card-title">{fundraiser.title}</h2>
            <p>{fundraiser.description}</p>
            <div className="card-actions">
              <Link to={`/fundraisers/${fundraiser._id}`}><button className="btn btn-primary  bg-[#bc6c25] border-none w-[250px] ">Show Details</button></Link>
            </div>
          </div>
   
        </div>
      ))}
    </div>

  </div>
  )
}

export default Fundraising