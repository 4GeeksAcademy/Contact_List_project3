import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58475.jpg?w=826" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    )
}
export default Contact;
