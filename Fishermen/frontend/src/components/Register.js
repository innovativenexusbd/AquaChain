import React, { useState } from 'react';
import authService from '../services/authService';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        identityDocument: ''
    });

    const { name, email, password, identityDocument } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await authService.register(formData);
            alert('Registration successful! Please wait for approval.');
        } catch (err) {
            alert('Error: ' + err.response.data.msg);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={onChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <div>
                <label>Identity Document</label>
                <input type="text" name="identityDocument" value={identityDocument} onChange={onChange} required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
