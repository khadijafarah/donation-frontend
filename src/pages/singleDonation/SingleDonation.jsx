import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import authProvider from "../../utils/authProvider/authProvider";
import DonationCards from '../home/donationCard/DonationCards';
import toast from 'react-hot-toast';


const SingleDonation = () => {
  const { user } = authProvider();
  const [donation, setDonation] = useState(null); // Initialize with null
  const [showModal, setShowModal] = useState(false);
  const [donationId, setDonationId]=useState("")
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleDonation = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/donations/${id}`);
        setDonation(response.data.data);
      } catch (error) {
        console.error('Error fetching donation:', error);
        // Handle errors, e.g., show an error message
      }
    };
    fetchSingleDonation();
  }, [id]);
  const handleDonation = (donation) => {
    setShowModal(true);
    setDonationId(donation._id);
  };
  const handleDonationSubmit = async(e) => {
    e.preventDefault();
      const form = e.target
      const message = form.message.value;
      const newTransaction = {
        donorId: user.id,
        donationId,
        message
      };
      console.log("newTransaction", newTransaction);
     try {
      const response = await axios.post (" http://localhost:5000/api/create-donation-transaction" , newTransaction)
      console.log(response);
      if(response.data.status === "Success"){
        toast.success("Transaction Completed")
        setShowModal(false);
        // setRefreshKey((prev)=>prev+1)
        
      }
      
     } catch (error) {
      console.log(error);
     }
  
    };

  return (
    <div>
      {donation ? ( // Conditional rendering based on donation state
        <>
          <div className='flex justify-center bg-[#dda15e] gap-8 p-20'>
            <div className=''>
            <img src={donation.thumbnail} alt="Shoes" className="w-[800px] h-[400px] rounded-full" />
            
            </div>
            <div className="w-[800px]">
              <h1 className='text-center text-2xl font-bold'>{donation.title}</h1>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam quod quaerat dolor ea consequuntur nisi velit explicabo libero, eveniet similique temporibus voluptate deserunt aliquam sed enim tempora nobis modi illo nemo! Perferendis velit odit eos aliquam provident. Error asperiores cum ut iure officiis, enim aperiam maiores optio necessitatibus fugit dolor eos voluptate quam eum incidunt eligendi est eveniet possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam quod quaerat dolor ea consequuntur nisi velit explicabo libero, eveniet similique temporibus voluptate deserunt aliquam sed enim tempora nobis modi illo nemo! Perferendis velit odit eos aliquam provident. Error asperiores cum ut iure officiis, enim aperiam maiores optio necessitatibus fugit dolor eos voluptate quam eum incidunt eligendi est eveniet possimus.
              </p>
              <p className='font-bold'>Category:{donation.category}</p>
              <p className='font-bold'>Amount:${donation.amount}</p>
              <button
                onClick={() => {
                  handleDonation(donation);
                }} className="btn btn-primary bg-[#bc6c25] border-none rounded-full w-full my-5  ">Donate</button>
             {showModal &&  <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                  open
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <form
                      className="card-body"
                      onSubmit={handleDonationSubmit}
                     
                    >
                    <div>
                      <h2  className='text-xl font-bold'>Amount:${donation.amount}</h2>
                    </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Message</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Message"
                          className="input input-bordered"
                          name="message"
                          required
                        />
                      </div>
                      <div className="modal-action mt-6">
                        <button className="btn btn-primary" type="submit">
                          Donate Now
                        </button>
                        <button
                          className="btn"
                          onClick={() => {
                            setShowModal(false);
                          }}
                    
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>}
             
            </div>
          </div>

          {/* ... rest of your component */}
        </>
      ) : (
        <p>Loading...</p> // Or display an error message if there's an error
      )}
    </div>
  );
};

export default SingleDonation;