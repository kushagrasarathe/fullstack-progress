import React from "react";

export default function Navbar( {children} ) {
    return (
        <>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                </ul>
            </nav>
            {children}   
        </>
    )
}