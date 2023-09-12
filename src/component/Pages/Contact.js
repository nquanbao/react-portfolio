import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
    div: {
        marginLeft: '100px'
    },
    h2: {
        paddingTop: '30px',
        fontSize: '30px'
    },
    form: {
        width: '600px',
        marginTop: '5px'
    },
    message: {
        width: '600px',
        marginTop: '5px',
        height: '200px'
    },
    p: {
      marginTop: '3px'
    }
}

function Contact() {
    // Create state variables for the fields in the form
    // also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and message
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setUserName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      if(!validateEmail(email) && (email != "")) {
        setErrorMessage(
            'Email is invalid'
        );
        return;
      }
      if (!userName) {
        setErrorMessage(
          'Username is required!!!'
        );
      } else if (!email) {
        setErrorMessage(
            'Email is required!!!'
          );
      } else if(!message) {
        setErrorMessage(
            'Messgase is required!!!'
          );
      }
      setUserName('');
      setMessage('');
      setEmail('');
    };
    return (
      <div style={styles.div}>
        <h2 style={styles.h2}>Contact</h2>
        <form  className="form">
          <p style={styles.p}>Email:</p>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            style={styles.form}
          />
          <p>Username:</p>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
            style={styles.form}
          />
          <p>Message:</p>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            style={styles.message}
          ></textarea>
          <br></br>
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <br></br>
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }

export default Contact;