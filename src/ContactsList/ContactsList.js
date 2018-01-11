import React, {Component} from 'react';
import Contact from './Contact/Contact';
import './Contact/Contact.css';


class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredContacts: [],
            search: '',
            isDisabled: true,
        };

        this.removeUser = this.removeUser.bind(this);
    }

    showUsers(e) {
        const filtered = this.props.contacts.filter(contact => {
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

    searchUsers(event) {
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

    removeUser(contact){
        this.setState({
           filteredContacts: this.state.filteredContacts.filter(filteredContact => filteredContact.id !== contact.id)
        });
    //     const users = this.state.filteredContacts;
    //     for(let i = 0; i < users.length; i++){
    //         if(users[i] === contact.id){
    //             users.splice(i,1);
    //          }
    //      }
    //     this.setState({
    //     })
    }

    submitForm(event) {
        this.props.contacts.push({
            "id": Math.random() * 10,
            "first_name": event.target[0].value,
            "last_name": event.target[1].value,
            "email": event.target[2].value,
            "gender": event.target[3].value
        });

        event.preventDefault();
        this.showUsers();

    }

    render() {
        const searchedUsers = this.state.filteredContacts.filter(contact => {
            return contact.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            //let searchEmail = contact.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return (
            <div>
                <form className="addUserForm" onSubmit={this.submitForm.bind(this)}>
                    <label>First Name:</label><input id='name' type='text' placeholder='First Name' required/>
                    <label>Last Name:</label><input id='lastName' type='text' placeholder='Last Name' required/>
                    <label>Email:</label><input id='email' type='email' placeholder='Email' required/>
                    <label>Gender:</label>
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="submit"/>
                </form>
                <div className='search'>
                    <label>Search:</label><input value={this.state.search}
                                                 onChange={this.searchUsers.bind(this)}
                                                 disabled={this.state.isDisabled}/>
                </div>
                <div>
                    <button style={{background: "red"}} onClick={this.resetUsers.bind(this)}>Reset</button>
                    <button onClick={this.showUsers.bind(this, 'Male')}>MALE</button>
                    <button onClick={this.showUsers.bind(this, 'Female')}>FEMALE</button>
                    <button onClick={this.showUsers.bind(this)}>ALL</button>
                </div>

                    {searchedUsers.map(contact => <Contact removeUser={this.removeUser}
                                                           contact={contact}
                                                           key={contact.id}/>
                    )}

            </div>
        );
    }
}

export default ContactsList;