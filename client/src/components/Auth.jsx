import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axois from 'axios';

import signInImage from '../assets/signup.jpg'

const initialState = {
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}
const Auth = () => {
    const [isSignup, setIsSignup] = useState(true)
    const [form, setForm] = useState(initialState)

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form)

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }
  return (
    <div className='auth__form-container'>
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSignup ? 'sign Up' : 'sign In'}</p>
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor='fullName'>Full Name</label>
                            <input
                             type="text"
                             name='fullName'
                             placeholder='Full Name'
                             onChange={handleChange}
                             required
                             />
                        </div>
                    )}
                    
                    <div className="auth__form-container_fields-content_input">
                            <label htmlFor='username'>Username</label>
                            <input
                             type="text"
                             name='UserName'
                             placeholder='Username'
                             onChange={handleChange}
                             required
                             />
                             {/* //username */}
                        </div>
                        {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <input
                             type="tel"
                             name='phoneNumber'
                             placeholder='Phone Number'
                             onChange={handleChange}
                             required
                             />
                        </div>
                    )}

                        {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor='avatarURL'>Avatar URL</label>
                            <input
                             type="text"
                             name='avatarURL'
                             placeholder='Avatar URL'
                             onChange={handleChange}
                             required
                             />
                        </div>
                    )}

                     <div className="auth__form-container_fields-content_input">
                            <label htmlFor='password'>Password</label>
                            <input
                             type="password"
                             name='password'
                             placeholder='password'
                             onChange={handleChange}
                             required
                             />
                        </div>

                        {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor='password'>Confirm Password</label>
                            <input
                             type="password"
                             name='comfirmPassword'
                             placeholder='password'
                             onChange={handleChange}
                             required
                             
                             />
                        </div>
                        )}

                        <div className="auth__form-container_fields-content_button">
                            <button>
                                {isSignup ? 'Sign Up' : 'Sign In'}
                            </button>
                        </div>
                </form>
                <div className="auth__form-container_fields-account">
                    <p>
                        {isSignup 
                        ? 'Already Have An Account? ' 
                        : "Don't Have An Account? "
                        }
                        <span onClick={switchMode}>
                            {isSignup ? 'Sign In' : 'Sign Up'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div className="auth__form-container_image">
            <img src={signInImage} alt="sign in" />
        </div>
    </div>
  )
}

export default Auth
