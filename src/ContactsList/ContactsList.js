import React, {Component} from 'react';
import Contact from './Contact/Contact';
import classes from './Contact/Contact.css';

class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredContacts: [],
        }
    }

    renderFunction(e) {
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
        });
        console.log(filtered);
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

        const contacts = this.state.filteredContacts;
        return (
            <div className="nesto">
                <button className={classes.button} onClick={this.renderFunction.bind(this, 'Male')}>MALE</button>
                <button className={classes.button} onClick={this.renderFunction.bind(this, 'Female')}>FEMALE</button>
                <button className={classes.button} onClick={this.renderFunction.bind(this, 'All')}>ALL</button>
                <tr  className={classes.ul}>
                    {contacts.map((contact) => {
                        return <Contact contact={contact} key={contact.id}/>
                    })}
                </tr>
            </div>
        );
    }
}

export default ContactsList;