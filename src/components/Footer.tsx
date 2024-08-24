import { BrandIcon } from "../icons/brand-icon"

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-left'>
                <div className='footer-left-logo'>
                    <BrandIcon />
                </div>
                <p className='footer-left-text-title'>
                    Empowering Businesses <br /> to Thrive Through Innovative <br /> Marketing Solutions
                </p>
            </div>
            <div className='footer-right'>
                <div className='footer-center-menu'>
                    <h3 className='footer-center-menu-title'>Sections </h3>
                    <div className="menu-wrapper">
                        <ul className='menu-items footer-center-menu-items'>
                            <li><a className='menu-item' href='#home'>Home</a></li>
                            <li><a className='menu-item' href='#companies'>Testimonials</a></li>
                            <li><a className='menu-item' href='#contact'>Contact</a></li>
                        </ul>
                        <ul className='menu-items footer-center-menu-items'>
                            <li><a className='menu-item' href='#home'>Home</a></li>
                            <li><a className='menu-item' href='#companies'>Testimonials</a></li>
                            <li><a className='menu-item' href='#contact'>Contact</a></li>
                        </ul>
                        <ul className='menu-items footer-center-menu-items'>
                            <li><a className='menu-item' href='#home'>Home</a></li>
                            <li><a className='menu-item' href='#companies'>Testimonials</a></li>
                            <li><a className='menu-item' href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}