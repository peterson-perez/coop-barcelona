import { GlobeIcon } from "../icons/globe-icon"
import { CallToActionButton } from "./CallToActionButton"

export const ContactForm = () => {
    return (
        <div className='contact-form-container' id='contact'>
            <GlobeIcon />

            <section className="contact-form-section">
                <div className="group">
                    <h2 className="contact-form-title">
                        Get In Touch
                    </h2>
                    <span className="contact-form-description">
                        Ready to boost your brand? Fill out the form below, and our team will reach out to discuss how we can help your business grow.
                    </span>

                </div>
                <form className="contact-form" onSubmit={e => e.preventDefault()}>
                    <div className='form-group'>
                        <input placeholder="Email" type="email" id="email" name="email" className="contact-form-input" />
                    </div>
                    <div className='form-group'>
                        <input placeholder="Name" type="text" id="name" name="name" className="contact-form-input" />
                    </div>
                    <div className='form-group'>
                        <textarea placeholder="Message" id="message" name="message" className="contact-form-input"></textarea>
                    </div>
                    <CallToActionButton type="submit">Get In Touch</CallToActionButton>
                </form>

            </section>
        </div>
    )
}