import React from 'react';
import classes from './Contact.css';

class Contact extends React.Component{
    render(){
        return (
            <td className={classes.li}>
                    First Name: {this.props.contact.first_name}<br/>
                    Last Name: {this.props.contact.last_name}<br/>
                    Email: {this.props.contact.email}<br/>
                    Gender: {this.props.contact.gender}
            </td>
        );
    }
}

export default Contact;