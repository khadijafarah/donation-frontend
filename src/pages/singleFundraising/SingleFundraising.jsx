import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import authProvider from "../../utils/authProvider/authProvider";
import toast from "react-hot-toast";

const SingleFundraising = () => {
  const { user } = authProvider();
  const [fundraiser, setFundraiser] = useState(null); // Initialize with null
  const [showModal, setShowModal] = useState(false);
  const [fundRaisingId, setFundRaisingId] = useState("");
  const [refreshKey, setRefreshKey]=useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleFundraising = async () => {
      try {
        const response = await axios.get(
          ` http://localhost:5000/api/fundraisers/${id}`
        );
        setFundraiser(response.data.data);
      } catch (error) {
        console.error("Error fetching donation:", error);
        // Handle errors, e.g., show an error message
      }
    };

    fetchSingleFundraising();
  }, [id,refreshKey]);

  const handleFundraising = (fundraiser) => {
    setShowModal(true);
    setFundRaisingId(fundraiser._id);
  };

  const handleFundraisingSubmit = async(e) => {
  e.preventDefault();
    const form = e.target
    const amount = parseFloat(form.amount.value);
    const message = form.message.value;
    const newTransaction = {
      donorId: user.id,
      fundRaisingId,
      amount,
      message
    };
    console.log("newTransaction", newTransaction);
   try {
    const response = await axios.post (" http://localhost:5000/api/create-transaction" , newTransaction)
    console.log(response);
    if(response.data.status === "Success"){
      toast.success("Transaction Completed")
      setShowModal(false);
      setRefreshKey((prev)=>prev+1)
      
    }
    
   } catch (error) {
    console.log(error);
   }

  };

  return (
    <div>
      {fundraiser ? ( // Conditional rendering based on donation state
        <>
          <div className="flex justify-center bg-[#a4ac86] gap-8 p-20">
            <div className="">
              <img
                src={fundraiser.thumbnail}
                alt="Shoes"
                className="w-[800px] h-[400px] rounded-lg"
              />
            </div>
            <div className="w-[800px]">
              <h1 className="text-center text-2xl font-bold">
                {fundraiser.title}
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                ullam quod quaerat dolor ea consequuntur nisi velit explicabo
                libero, eveniet similique temporibus voluptate deserunt aliquam
                sed enim tempora nobis modi illo nemo! Perferendis velit odit
                eos aliquam provident. Error asperiores cum ut iure officiis,
                enim aperiam maiores optio necessitatibus fugit dolor eos
                voluptate quam eum incidunt eligendi est eveniet possimus. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam
                quod quaerat dolor ea consequuntur nisi velit explicabo libero,
                eveniet similique temporibus voluptate deserunt aliquam sed enim
                tempora nobis modi illo nemo! Perferendis velit odit eos aliquam
                provident. Error asperiores cum ut iure officiis, enim aperiam
                maiores optio necessitatibus fugit dolor eos voluptate quam eum
                incidunt eligendi est eveniet possimus.
              </p>
              <p className="font-bold">Category:{fundraiser.category}</p>
              <p className="font-bold">daysLeft:{fundraiser.daysLeft}</p>

              <div className="bg-[#656d4a] p-4">
                <progress
                  className="progress progress-success w-full"
                  value={
                    (fundraiser.raisedAmount / fundraiser.targetedAmount) * 100
                  }
                  max="100"
                ></progress>
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">
                      Raised Amount:${fundraiser.raisedAmount}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">
                      Targeted Amount:${fundraiser.targetedAmount}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  handleFundraising(fundraiser);
                }}
                className="btn btn-primary bg-[#414833] border-none rounded-full w-full my-5 "
              >
                Donate
              </button>
              {showModal && (
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                  open
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <form
                      className="card-body"
                      onSubmit={handleFundraisingSubmit}
                    >
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Amount</span>
                        </label>
                        <input
                          type="number"
                          placeholder="Enter the amount"
                          className="input input-bordered"
                          name="amount"
                          required
                        />
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
                </dialog>
              )}
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

export default SingleFundraising;
