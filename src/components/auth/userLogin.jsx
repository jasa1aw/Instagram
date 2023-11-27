'use client';
import Link from 'next/link';
export default function UserLogin () {
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
                    </div>
                <div className="card">
                        <p>Dont`t have an account?</p>
                        <Link href={'/'} >Sign up</Link>
                </div>
            </div>    
        </section>
    )
}