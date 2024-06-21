import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import Contact from "./contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
	const [contacts, setContacts] = useState([]); 

	const getContacts = () => {
		fetch('https://playground.4geeks.com/contact/agendas/Maria/contacts')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setContacts(data.contacts);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getContacts();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Contact List</h1>
			<ul>
				{contacts.map(contact => (
					<div className="card" style={{ width: '18rem' }}>
						<img src="https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58475.jpg?w=826" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{contact.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<FontAwesomeIcon icon={faEdit} />
							<FontAwesomeIcon icon={faTrash} />
						</div>
					</div>
				))}
			</ul>
			<Contact />
		</div>
	);
};

