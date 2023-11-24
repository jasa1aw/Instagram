'use client';
import Link from 'next/link';
import { useState} from 'react';
export default function UserLogin () {
    const [step, setStep] = useState(1);
    return(
        <section className="login-page">
            {step == 2 && <div className='home-phone-img'>
                <img src='/img/home-phones.png' />
            </div>}
            <div className='card-block'>
                {step == 2 && <div className="card">
                        <div className='card-img'>
                            <img src="/img/icons/logo.svg" alt="" />
                        </div>
                        <form>
                            <input className='input' placeholder='Phone number, username, or email'/>
                            <input className='input' placeholder='Password'/>
                            <button className='button button-primary'>Log in</button>
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
                    </div>}
                {step == 2 && <div className="card">
                        <p>Dont`t have an account?</p>
                        <Link href={'/'} onClick={() => setStep(1)}>Sign up</Link>
                    </div>}
                {step == 1 && <div className="card">
                        <div className='card-img'>
                            <img src="/img/icons/logo.svg" alt="" />
                        </div>
                        <h2>
                            Sign up to see photos and videos from your friends.
                        </h2>
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
                            <input className='input' placeholder='Mobile Number or Email'/>
                            <input className='input' placeholder='Full Name'/>
                            <input className='input' placeholder='Username'/>
                            <input className='input' placeholder='Password'/>
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
                            <button className='button button-primary'>Sign up</button>
                            
                            
                            <a href=''>Забыли пароль?</a>
                        </form>
                    </div>}
                    {step == 1 && <div className="card">
                        <p>Have an account?</p>
                        <Link href={'/login'} onClick={() => setStep(2)}>Log in</Link>
                    </div>}
                <div className='appLink'>
                    <p>Get the app.</p>
                    <div className='appLink-img'>
                        <img src='/img/googlePLay.png' />
                        <img src='/img/MS.png' />
                    </div>
                </div>
            </div>
        </section>
    )
}