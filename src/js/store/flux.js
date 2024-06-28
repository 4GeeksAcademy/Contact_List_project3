const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            fullName: '',
            email: '',
            phone: '',
            address: '',
            editingContactId: null,
        },
        actions: {
            editContact: (contactId) => {
                setStore({ editingContactId: contactId });
            },
            cancelEdit: () => {
                setStore({ editingContactId: null });
            },
            checkIfAgendaExists: () => {
                return fetch('https://playground.4geeks.com/contact/agendas/Maria')
                    .then(response => response.ok)
                    .catch(error => {
                        console.error('Error checking if agenda exists', error);
                        return false;
                    });
            },
            createAgenda: () => {
                const actions = getActions();
                actions.checkIfAgendaExists()
                    .then(agendaExists => {
                        if (!agendaExists) {
                            return fetch('https://playground.4geeks.com/contact/agendas/Maria', {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json'
                                }
                            })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error("Response was not ok");
                                }
                                console.log('Success creating agenda');
                            });
                        } else {
                            console.log('Agenda already exists');
                        }
                    })
                    .catch(error => {
                        console.error('Error creating agenda', error);
                    });
            },
            getContacts: () => {
                fetch('https://playground.4geeks.com/contact/agendas/Maria/contacts')
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setStore({ contacts: data.contacts });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            createContact: (contact) => {
                const store = getStore();
                fetch('https://playground.4geeks.com/contact/agendas/Maria/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setStore({ 
                        contacts: [...store.contacts, data],
                        fullName: '',
                        email: '',
                        phone: '',
                        address: ''
                    });
                    console.log("Success creating contact", data);
                })
                .catch((error) => {
                    console.log("Error creating contact", error);
                });
            },
            handleSubmit: (e) => {
                e.preventDefault();
                const store = getStore();
                const actions = getActions();
                const newContact = {
                    name: store.fullName,
                    email: store.email,
                    phone: store.phone,
                    address: store.address
                };
                actions.createContact(newContact);
            },
            deleteContact: (contactId) => {
                const store = getStore();
                fetch(`https://playground.4geeks.com/contact/agendas/Maria/contacts/${contactId}`, {
                    method: 'DELETE',
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const updatedContacts = store.contacts.filter(contact => contact.id !== contactId);
                    setStore({ contacts: updatedContacts });
                    console.log('Contact deleted successfully');
                })
                .catch((error) => {
                    console.log('Error deleting contact:', error);
                });
            },
            handleUpdate: (e, contactId) => {
                e.preventDefault();
                const store = getStore();
                const updatedContact = {};
                if (store.fullName !== '') updatedContact.name = store.fullName;
                if (store.email !== '') updatedContact.email = store.email;
                if (store.phone !== '') updatedContact.phone = store.phone;
                if (store.address !== '') updatedContact.address = store.address;

                fetch(`https://playground.4geeks.com/contact/agendas/Maria/contacts/${contactId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedContact)
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const updatedContacts = store.contacts.map(contact => {
                        if (contact.id === contactId) {
                            return { ...contact, ...updatedContact };
                        }
                        return contact;
                    });
                    setStore({ contacts: updatedContacts, editingContactId: null });
                    console.log('Contact updated successfully');
                })
                .catch((error) => {
                    console.log('Error updating contact:', error);
                });
            },
            handleInputChange: (e) => {
                const { name, value } = e.target;
                setStore({ [name]: value });
            },
        }
    };
};

export default getState;