import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Contact from "./contact";

export const Home = () => {
    const { actions } = useContext(Context);

    useEffect(() => {
        actions.createAgenda();
        actions.getContacts();
    }, []);

    return (
        <div className="container">
            <Contact />
        </div>
    );
};
