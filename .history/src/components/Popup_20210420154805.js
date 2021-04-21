import React from 'react'

export default function Popup({open, children}) {
    
    if(!open)
        return null
    
    return (
        <div>
            {children}
        </div>
    )
}
