import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { createUser, setUser,user } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password, photourl);

        createUser(email, password)
            .then((userCredential) => {
                setUser(userCredential);
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
        })
    }



    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center py-5">Create Account!</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label">Name</label>
                                <input required name='name' type="text" className="input" placeholder="Name" />
                                {/* Photo url */}
                                <label className="label">Photo URL</label>
                                <input required name='photourl' type="text" className="input" placeholder="Photo URL" />
                                {/* email */}
                                <label className="label">Email</label>
                                <input required name='email' type="email" className="input" placeholder="Email" />
                                {/* password */}
                                <label className="label">Password</label>
                                <input required name='password' type="password" className="input" placeholder="Password" />
                                {/* trams and conditions */}
                                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box  py-4">
                                    <label className="label">
                                        <input required type="checkbox" defaultChecked className="checkbox" />
                                        Accept <span className='font-semibold text-bg-600'>terms & conditions</span>.
                                    </label>
                                </fieldset>
                                <button type='submit' className="btn btn-neutral mt-4">Create Account</button>
                                <p className='mt-3'>Already have an Account? <Link className='text-secondary font-semibold underline' to='/auth/login'>Login</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;