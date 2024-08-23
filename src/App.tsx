import './App.css'
import { BrandIcon } from './icons/brand-icon'
function App() {

    const time = () => {
        const countDownDate = new Date("October 20, 2024 15:37:25").getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return <h1>`${days}d ${hours}h ${minutes}m ${seconds}s`</h1>
    }



    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <BrandIcon />
                    <h1 className='message-logo'>Advertising Agency</h1>
                </div>

                <div className='menu-container'>
                    <nav className='menu'>
                        <ul className='menu-items'>
                            <li><a className='menu-item' href='#'>Home</a></li>
                            <li><a className='menu-item' href='#'>About</a></li>
                            <li><a className='menu-item' href='#'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <body className='body'>
                <div className='slider-container'>
                    <div className='slider'>
                        <div className='title-container'>
                            <h1 className='title'>
                                Boost Your Brand Now: Offer Ends In
                                <span>20d 33m 40s</span>
                            </h1>
                        </div>
                        <button className='offer'>Claim Your Offer</button>
                    </div>
                </div>
                <div className='aside-container'>
                    <main className='aside'>
                        <div className='aside-left'>
                            <div>
                                <BrandIcon />
                            </div>
                            <br className='line' />
                            <div className='group-116'>
                                <div className='rectangle-53'></div>
                                <p className='aside-left-lorem'>Lorem ipsum dolor</p>
                            </div>
                            <div className='group-116'>
                                <div className='rectangle-53'></div>
                                <p className='aside-left-lorem'>Lorem ipsum dolor</p>
                            </div>
                            <div className='group-116'>
                                <div className='rectangle-53'></div>
                                <p className='aside-left-lorem'>Lorem ipsum dolor</p>
                            </div>
                            <div className='group-116'>
                                <div className='rectangle-53'></div>
                                <p className='aside-left-lorem'>Lorem ipsum dolor</p>
                            </div>
                        </div>
                        <div className='aside-center'>
                            <div className='aside-center-up'>
                                <div className='card-center-up'>
                                    <div className='message-center-up-container'>
                                        <p className='aside-left-lorem'>Lorem ipsum dolor</p>
                                        <div className='rectangle-53'></div>
                                    </div>
                                    <div className='grafic'></div>
                                </div>
                            </div>
                            <div className='aside-center-down'>
                                <div className='message-center-damn-container'>
                                    <p className='aside-left-lorem'>Lorem ipsum dolor</p>
                                    <div className='rectangle-53'></div>
                                </div>
                                <div className='grafic'></div>
                            </div>
                        </div>
                        <div className='aside-right'>
                            <div className='aside-right-up'>
                            <div className='message-right-up-container'>
                                    <p className='aside-left-lorem'>Lorem ipsum dolor</p>
                                    <div className='rectangle-53'></div>
                                </div>
                            </div>
                            <div className='aside-right-down'></div>
                        </div>
                    </main>
                </div>
            </body>
        </>
    )
}

export default App
