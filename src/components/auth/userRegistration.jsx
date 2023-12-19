'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { SignUp, authorize } from '@/app/store/slices/authSlice';

export default function Registration () {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const router = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [full_name, setFull_name] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = () => {
        dispatch(SignUp(email, full_name, username, password));
        if(email.length > 0 && full_name.length > 0 && username.length>0 && password.length > 0){
            router.push('/login')
        }
    }
    return(
        <section className="login-page registr-page">
            <div className="card">
                <div className='card-img'>
                    <img src="/img/icons/logo.svg" alt="" />
                </div>
                <h2>Sign up to see photos and videos from your friends.</h2>
                <div className='facebook-link facebook-link-btn'>
                    <Link href={''} className='facebook-btn'><img src="/img/icons/facebook2.svg" alt="facebook" /></Link>
                    <Link href={''}>Log in with Facebook</Link>
                </div>
                <div className='lines'>
                    <hr/>
                    <h2>OR</h2>
                    <hr/>
                </div>
                <form>
                    <input className='input' placeholder='Mobile Number or Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className='input' placeholder='Full Name' value={full_name} onChange={(e) => setFull_name(e.target.value)}/>
                    <input className='input' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input className='input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p className='privace-sub'>
                        People who use our service may have uploaded 
                        your contact information to Instagram. 
                        <Link href={''}>Learn More</Link>
                    </p>
                    <p className='privace-sub'>
                        By signing up, you agree to our 
                        <Link href={''}> Terms , Privacy Policy </Link>
                        and 
                        <Link href={''}> Cookies Policy</Link>.
                    </p>
                    <button className='button button-primary' type='button' onClick={SignIn}>Sign up</button>                           
                    <a href=''>Забыли пароль?</a>
                </form>
            </div>
            <div className="card">
                <p>Have an account?</p>
                <Link href={'/login'}>Log in</Link>
            </div>
            <div className='appLink'>
                <p>Get the app.</p>
                <div className='appLink-img'>
                    <img src='/img/googlePLay.png' />
                    <img src='/img/MS.png' />
                </div>
            </div>
        </section>
    )
}