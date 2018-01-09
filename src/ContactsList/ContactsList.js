import React,{Component} from 'react';
import Contact from './Contact/Contact';
import classes from './Contact/Contact.css';

class ContactsList extends Component {

    render(){
        return(
            <tr className={classes.ul}>
                {this.props.contacts.map((contact) => {
                    return <Contact contact={contact} key={contact.id}/>
                })}
            </tr>
        );
    }
}

export default ContactsList;