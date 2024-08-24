import { PropsWithChildren, } from "react"

type CallToActionButtonProps = PropsWithChildren & {
    type?: 'button' | 'submit'
}

export const CallToActionButton = ({ children = 'Get Started Now', type = 'button' }: CallToActionButtonProps) => {
    return (
        <button type={type} className='call-to-action-button'>{children}</button>
    )
}