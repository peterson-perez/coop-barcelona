import { BrandIcon } from "../icons/brand-icon"
import { CallToActionButton } from "./CallToActionButton"

export const Header = () => {
    return <header className='header'>
        <div className='logo'>
            <BrandIcon />
            <h1 className='message-logo'>Advertising Agency</h1>
        </div>

        <div className='menu-container'>
            <nav className='menu'>
                <ul className='menu-items'>
                    <li><a className='menu-item' href='#home'>Home</a></li>
                    <li><a className='menu-item' href='#companies'>Testimonials</a></li>
                    <li><a className='menu-item' href='#contact'>Contact</a></li>
                    <li><CallToActionButton /></li>
                </ul>
            </nav>
        </div>
    </header>
}