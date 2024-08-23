export const ContactForm = () => {
    return (
        <div className='contact-form'>
            <h2>
                Contact Us
            </h2>
            <form>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className='form-group'>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}