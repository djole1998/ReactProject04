import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        const {first_name, last_name, email, gender} = this.props.contact;
        return (
            <div className='userDiv'>
                <button className='removeButton' onClick={ this.props.removeUser.bind(this, this.props.contact)}>Remove</button>
                First Name: {first_name}<br/>
                Last Name: {last_name}<br/>
                Email: {email}<br/>
                Gender: {gender}
            </div>
        );
    }
}

export default Contact;