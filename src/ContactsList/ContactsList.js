import React, {Component} from 'react';
import Contact from './Contact/Contact';
import {classes} from './Contact/Contact.css';

class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredContacts: [],
            search: '',
            isDisabled: true
        }
    }

    showUsers(e) {
        const filtered = this.props.contacts.filter((contact) => {
            if (e === 'Male') {
                return contact.gender === 'Male';
            } else if (e === 'Female') {
                return contact.gender === 'Female';
            } else {
                return contact.gender;
            }
        });
        this.setState({
            filteredContacts: filtered,
            isDisabled: false
        });
    }

    searchContacts(event) {
        this.setState({
            search: event.target.value
        })
    }

    resetUsers() {
        this.setState({
            filteredContacts: [],
            search: '',
            isDisabled: true
        })
    }

    // renderMale() {
    //     const filtered = this.props.contacts.filter((contact) => {
    //         return contact.gender === 'Male';
    //     });
    //     this.setState({
    //         filteredContacts: filtered
    //     })
    // };
    //
    // renderFemale = () => {
    //     const filtered = this.props.contacts.filter((contact) => {
    //         return contact.gender === 'Female';
    //     });
    //     this.setState({
    //         filteredContacts: filtered
    //     })
    // };
    //
    // renderAll = () => {
    //     this.setState({
    //         filteredContacts: this.props.contacts
    //     })
    // };

    render() {
        const searchedContacts = this.state.filteredContacts.filter(contact => {
            let name = contact.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            let email = contact.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            return name, email;
        });
        return (
            <div>
                <div className='search'>
                    <label>Search:</label><input value={this.state.search}
                                                 onChange={this.searchContacts.bind(this)}
                                                 disabled={this.state.isDisabled}/>
                </div>
                <div>
                    <button style={{background: "red"}} onClick={this.resetUsers.bind(this)}>Reset</button>
                    <button onClick={this.showUsers.bind(this, 'Male')}>MALE</button>
                    <button onClick={this.showUsers.bind(this, 'Female')}>FEMALE</button>
                    <button onClick={this.showUsers.bind(this, 'All')}>ALL</button>
                </div>
                <p>
                    {searchedContacts.map(contact => <Contact contact={contact} key={contact.id}/>
                    )}
                </p>
            </div>
        );
    }
}

export default ContactsList;