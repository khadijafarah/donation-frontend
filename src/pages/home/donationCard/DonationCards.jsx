import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const DonationCards = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const fetchDonation = async () => {
      const response = await axios.get("http://localhost:5000/api/donations");
      console.log(response);
      setDonations(response.data.data.slice(0, 4));
    };
    fetchDonation();
  }, []);
  console.log(donations);
  return (
    <div className="mt-[100px]">
      <h1 className="text-center text-4xl font-bold">
        Explore Donation Causes
      </h1>
      <p className="text-center my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, adipisci.
      </p>
      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto mt-4">
        {donations.map((donation) => (
          <div key={donation._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={donation.thumbnail}
                alt="Shoes"
                className="h-60 w-full"
              />
            </figure>
            <div className="card-body bg-orange-100">
              <h2 className="card-title">{donation.title}</h2>
              <p>{donation.description}</p>
              <div className="card-actions justify-center">
                <Link to={`/donations/${donation._id}`}>
                  <button className="btn glass btn-primary w-[250px] bg-[#bc6c25] border-none text-lg">
                    Show Details
                  </button>
                </Link> 
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-6">
       <Link to="/donation"> <button className="btn glass  bg-amber-400 w-[150px] text-green-800 font-bold text-lg">
          Show All
        </button></Link>
      </div>
    </div>
  );
};

export default DonationCards;
