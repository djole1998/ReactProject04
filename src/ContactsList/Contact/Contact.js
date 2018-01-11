import React from 'react';
import classes from './Contact.css';

class Contact extends React.Component {
    render() {
        const {first_name, last_name, email, gender} = this.props.contact;
        return (
            <td className={classes.td}>
                <button className='removeButton' onClick={this.props.removeUser.bind(this, this.props.contact)}>Remove</button>
                First Name: {first_name}<br/>
                Last Name: {last_name}<br/>
                Email: {email}<br/>
                Gender: {gender}
            </td>
        );
    }
}

export default Contact;