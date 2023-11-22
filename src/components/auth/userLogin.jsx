'use client';
import {useState} from 'react';
export default function UserLogin () {
    const [step, setStep] = useState(1);
    return(
        <section className="login-page">
            {step == 1 && <div className='home-phone-img'>
                <img src='/img/home-phones.png' />
            </div>}
            <div className='card-block'>
                {step == 1 && <div className="card">
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
                                <a href="" className='facebook-btn'><img src="/img/icons/facebook.svg" alt="facebook" /></a>
                                <a href="">Log in with Facebook</a>
                            </div>
                            <a href=''>Forgot password?</a>
                        </form>
                    </div>}
                {step == 1 && <div className="card">
                        <p>Dont`t have an account?</p>
                        <a onClick={()=> setStep(2)}>Sign up</a>
                    </div>}
                {step == 2 && <div className="card">
                        <div className='card-img'>
                            <img src="/img/icons/logo.svg" alt="" />
                        </div>
                        <h2>
                            Sign up to see photos and videos from your friends.
                        </h2>
                        <div className='facebook-link facebook-link-btn'>
                                <a href="" className='facebook-btn'><img src="/img/icons/facebook2.svg" alt="facebook" /></a>
                                <a href="">Log in with Facebook</a>
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
                                <a>Learn More</a>
                            </p>
                            <p className='privace-sub'>
                                By signing up, you agree to our 
                                <a>Terms , Privacy Policy </a>
                                and 
                                <a>Cookies Policy</a>.
                            </p>
                            <button className='button button-primary'>Sign up</button>
                            
                            
                            <a href=''>Забыли пароль?</a>
                        </form>
                    </div>}
                    {step == 2 && <div className="card">
                        <p>Have an account?</p>
                        <a onClick={()=> setStep(1)}>Log in</a>
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