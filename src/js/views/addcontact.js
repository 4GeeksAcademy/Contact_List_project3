import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddContact = () =>{
    const {store, actions} = useContext(Context);
    return (
        <div className="container">
            <h1>Add a new contact</h1>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Email address</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Phone</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <button type="submit" className="btn btn-primary">Add Contact</button>
            </form>
        </div>
    );
}

export default AddContact;