import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
    <div className="row">
        {store.contacts.map(contact => (
            <div className="col-12 mb-3" key={contact.id}>
                <div className="card custom-card">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img
                                src="https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58475.jpg?w=826"
                                className="card-img-top"
                                alt="Profile"
                            />
                        </div>
                        <div className="card-body">
                            <div className="card-content">
                                {store.editingContactId === contact.id ? (
                                    <form onSubmit={(e) => actions.handleUpdate(e, contact.id)}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={store.fullName}
                                                onChange={actions.handleInputChange}
                                                name="fullName"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={store.email}
                                                onChange={actions.handleInputChange}
                                                name="email"
                                                placeholder="Email address"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                value={store.phone}
                                                onChange={actions.handleInputChange}
                                                name="phone"
                                                placeholder="Phone"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={store.address}
                                                onChange={actions.handleInputChange}
                                                name="address"
                                                placeholder="Address"
                                            />
                                        </div>
                                        <div className="button-group">
                                            <button type="submit" className="btn btn-primary btn-edit mr-2">Save</button>
                                            <button type="button" className="btn btn-secondary btn-cancel" onClick={() => actions.cancelEdit()}>Cancel</button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="card-content">
                                        <h5 className="card-title">{contact.name}</h5>
                                        <p className="card-text">Email: {contact.email}</p>
                                        <p className="card-text">Phone: {contact.phone}</p>
                                        <p className="card-text">Address: {contact.address}</p>
                                        <div className="button-group">
                                            <button className="btn btn-primary btn-edit" onClick={() => actions.editContact(contact.id)}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button className="btn btn-danger btn-delete" onClick={() => actions.deleteContact(contact.id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
    );
};

export default Contact;