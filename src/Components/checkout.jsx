import React from "react";
import { Link } from "react-router-dom"

function Checkout() {
    return (
        <>
        <div className="checkout-main">
        <div>
            <h3>Getting Your Order</h3>
            <div >
                <label>First Name</label>
                <input type="text" /></div><br />
            <div>
                <label>Last Name</label>
                <input type="text" /><br />

            </div>
            <div>
                <label>Address</label>
                <input type="text" />
            </div><br />
            <input type="text" placeholder="Enter nearby Landmark" /><br />
            <div>
                <label>City</label>
                <input type="text" />
            </div><br />
            <select>
                <optgroup label="Pick State">
                    <option>Aandhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujrat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhaya Pradesh</option>
                    <option>Maharasthara</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Telangana</option>
                    <option>Tamil Nadu</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                </optgroup>
            </select> <br />
            <div>
                <label>Pin Code</label>
                <input type="number" />
            </div>
            </div>
          
          <div>
            <h2>Contact Information</h2>
           <div>
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" />
            </div><br />
            <div>
            <label>Contact No.</label>
            <input type="number" placeholder="Enter Your Number" />
            </div> <br />
            <Link to="/payment">
            <button>Continue to Payment</button></Link>
            </div>
            </div>
        </>
    )
}

export { Checkout }