import { CallToActionButton } from './components/CallToActionButton';
import { CompaniesWeWorked } from './components/CompaniesWeWorked';
import { ContactForm } from './components/ContactForm';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
import { MainCharts } from './components/MainCharts';
import { BrandIcon } from './icons/brand-icon'

const offerEndDate = new Date('2024-10-20T00:00:00')

function App() {
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
                            <li><CallToActionButton /></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <body className='body'>
                <div className='slider-container'>
                    <div className='slider'>
                        <div className='title-container'>
                            <h1 className='title'>
                            Maximize Your Brand's Potential <br /> With Our Expert Strategies 
                            </h1>
                            <p className='title-description'>
                                Explore our exclusive deals before October 20th! Don't miss out - act now and elevate your brand with our cutting-edge advertising strategies.
                            </p>
                        </div>
                        <CountDown endDate={offerEndDate} />
                        <CallToActionButton />
                    </div>
                </div>
                <MainCharts />
                <CompaniesWeWorked />
                <ContactForm />
                <Footer />
            </body>
        </>
    )
}

export default App
