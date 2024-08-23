import { PropsWithChildren, } from "react"

export const CallToActionButton = ({ children = 'Get Started Now' }: PropsWithChildren) => {
    return (
        <>
            <button type="button" className='offer-button'>{children}</button>
        
        </>
    )
}