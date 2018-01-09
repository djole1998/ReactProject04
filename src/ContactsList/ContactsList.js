import React,{Component} from 'react';
import Contact from './Contact/Contact';
import classes from './Contact/Contact.css';

class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredContacts: props.contacts
        }
    }

    renderMale() {
        const filtered = this.props.contacts.filter((contact) => {
            return contact.gender === 'Male';
        });
        this.setState({
            filteredContacts: filtered
        })
    };

    renderFemale = () => {
        const filtered = this.props.contacts.filter((contact) => {
            return contact.gender === 'Female';
        });
        this.setState({
            filteredContacts: filtered
        })
    };

    renderAll = () => {
        this.setState({
            filteredContacts: this.props.contacts
        })
    };


    render(){
        const contacts = this.state.filteredContacts;
        return(
            <div className={classes.div}>
                <button onClick={this.renderMale.bind(this)}>Male</button>
                <button onClick={this.renderFemale.bind(this)}>Female</button>
                <button onClick={this.renderAll.bind(this)}>All</button>
                <tr className={classes.ul}>
                    {contacts.map((contact) => {
                        return <Contact contact={contact} key={contact.id}/>
                    })}
                </tr>
            </div>
        );
    }
}

export default ContactsList;