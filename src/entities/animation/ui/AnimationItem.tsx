import { ReactNode } from "react"

export const AnimationItem = ({children}: {children: ReactNode}) => {

    return (
        <div className="relative w-full h-full p-10 bg-neutral-900">
            {children}
        </div>
    )
}