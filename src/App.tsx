import { CallToActionButton } from './components/CallToActionButton';
import { CompaniesWeWorked } from './components/CompaniesWeWorked';
import { ContactForm } from './components/ContactForm';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainCharts } from './components/MainCharts';

const offerEndDate = new Date('2024-10-20T00:00:00')

function App() {
    return (
        <>
            <Header />
            <main className='main-container'>
                <div className='call-to-action-container'>
                    <div className='call-to-action'>
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
            </main>
        </>
    )
}

export default App
