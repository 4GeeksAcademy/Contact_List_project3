import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/addcontact.css";

const AddContact = () => {
    const { store, actions } = useContext(Context);

    return (
                <div className="container">
                    <h1>Add a new contact</h1>
                    <form onSubmit={actions.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="fullName" 
                                value={store.fullName} 
                                onChange={actions.handleInputChange} 
                                name="fullName" 
                                placeholder="Enter full name" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                value={store.email} 
                                onChange={actions.handleInputChange} 
                                name="email" 
                                placeholder="Enter email" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                id="phone" 
                                value={store.phone} 
                                onChange={actions.handleInputChange} 
                                name="phone" 
                                placeholder="Enter phone number" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                value={store.address} 
                                onChange={actions.handleInputChange} 
                                name="address" 
                                placeholder="Enter address" 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary boton_formulario">Add Contact</button>
                    </form>
                </div>
    );
}

export default AddContact;