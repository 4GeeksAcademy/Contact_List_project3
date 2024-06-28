import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import AddContact from "./addcontact";

export const Demo = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.createAgenda();
        actions.getContacts();
    }, []);

    return (
        <div className="container">
            <AddContact />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
