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
        height: '200px'
    },
    p: {
      marginBottom: '0',
      marginTop: '15px'
    },
    container: {
      marginLeft: '100px'
    }
}

function Contact() {
    // Create state variables for the fields in the form
    // also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleBlur = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      if(inputType === 'email') {
        const isValid = validateEmail(inputValue);
        if(!isValid && inputValue !=='') {
          setErrorMessage('Email is inValid')
        } else if(inputValue === '') {
          setErrorMessage('Email is required')
        }
      } else if(inputType === 'userName') {
        if(inputValue === ''){
          setErrorMessage('Username is required')
        }
      } else if(inputType === 'message') {
        if(inputValue === '') {
          setErrorMessage('Message is required')
        }
      };
      setUserName('');
      setMessage('');
      setEmail('');
    }
  
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
      if(!validateEmail(email) && (email !== "")) {
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
          <div style={styles.container}>
            <form  className="form">
              <p style={styles.p}>Email:</p>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                style={styles.form}
                onBlur={handleBlur}
              />
              <p style={styles.p}>Username:</p>
              <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="Username"
                style={styles.form}
                onBlur={handleBlur}
              />
              <p style={styles.p}>Message:</p>
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Message"
                style={styles.message}
                onBlur={handleBlur}
              ></textarea>
              <br></br>
              <br></br>
              {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
              )} 
              <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
          </div>
      </div>
    );
  }

export default Contact;