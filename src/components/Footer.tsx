import { BrandIcon } from "../icons/brand-icon"

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-left'>
                <div className='footer-left-logo'>
                    <BrandIcon />
                </div>
                <div className='footer-left-text'>
                    <p className='footer-left-text-title'>Lorem ipsum dolor sit amet</p>
                    <p className='footer-left-text-subtitle'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='footer-center'>
                <div className='footer-center-menu'>
                    <p className='footer-center-menu-title'>Menu
                    </p>
                    <ul className='footer-center-menu-items'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}