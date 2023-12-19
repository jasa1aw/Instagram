'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import {LogIn, authorize } from '@/app/store/slices/authSlice';
export default function UserLogin () {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const router = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        dispatch(LogIn(email,password));
        if(email.length > 0 && password.length > 0){
            router.push('/profile')
        }
    }
    return(
        <section className="login-page">
            <div className='home-phone-img'>
                <img src='/img/home-phones.png' />
            </div>
            <div className='card-block'>
                <div className="card">
                        <div className='card-img'>
                            <img src="/img/icons/logo.svg" alt="" />
                        </div>
                        <form>
                            <input className='input' placeholder='Phone number, username, or email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input className='input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button className='button button-primary' type='button' onClick={Login}>Log in</button>
                            <div className='lines'>
                                <hr/>
                                <h2>OR</h2>
                                <hr/>
                            </div>
                            <div className='facebook-link'>
                                <Link href={''} className='facebook-btn'><img src="/img/icons/facebook.svg" alt="facebook" /></Link>
                                <Link href={''}>Log in with Facebook</Link>
                            </div>
                            <Link href={''} >Forgot password?</Link>
                        </form>
                    </div>
                <div className="card">
                        <p>Dont`t have an account?</p>
                        <Link href={'/'} >Sign up</Link>
                </div>
            </div>    
        </section>
    )
}