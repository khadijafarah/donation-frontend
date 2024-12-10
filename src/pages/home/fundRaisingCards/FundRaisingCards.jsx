import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FundRaisingCards = () => {
  const [fundraisers, setFundraisers] = useState([]);
  useEffect(() => {
    const fetchFundraising = async () => {
      const response = await axios.get("http://localhost:5000/api/fundraisers");
      console.log(response);
      setFundraisers(response.data.data.slice(0,4));
    };
    fetchFundraising()
  }, []);
  console.log(fundraisers);
  return (
    <div className="my-[100px]">
      <h1 className="text-center text-4xl font-bold">Explore Fundraising Causes</h1>
      <p className="text-center my-3">
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
     <div className="flex justify-center py-6">
    <Link to="/fundraising"><button className="btn glass  bg-amber-400 w-[150px] text-green-800 font-bold text-lg">Show All</button></Link>
     </div>
    </div>
  );
};

export default FundRaisingCards;
