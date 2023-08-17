// import styles
import './Page4.css' 

// import hooks
import { useState } from 'react'



export const Page4 = () => {


const [FaceBook, setFaceBook] = useState('./Icons/Facebook.png')
const [Instagram, setInstagram] = useState('./Icons/Instagram.png')
const [Zalo, setZalo] = useState('./Icons/Phone.png')
const [Email, setEmail] = useState('./Icons/Envelope.png')

function hoverFacebook() { 
    setFaceBook('./Icons/Facebook(2).png')
}
function dehoverFacebook() { 
    setFaceBook('./Icons/Facebook.png')
}

function hoverInstagram() { 
    setInstagram('./Icons/Instagram(2).png')
}
function dehoverInstagram() { 
    setInstagram('./Icons/Instagram.png')
}

function hoverZalo() { 
    setZalo('./Icons/Phone(2).png')
}
function dehoverZalo() { 
    setZalo('./Icons/Phone.png') 
}

function hoverEmail() { 
    setEmail('./Icons/Envelope(2).png')
}
function dehoverEmail() { 
    setEmail('./Icons/Envelope.png')
}



    return ( 
        <div className='Page4'> 
                <button className='ContactButton'>
                    <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        <img src={FaceBook} 
                        onMouseEnter={hoverFacebook}
                        onMouseLeave={dehoverFacebook}
                        alt='Facebook Link'/>
                    </a>
                </button>
                <button className='ContactButton'>
                    <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        <img src={Instagram}
                        onMouseEnter={hoverInstagram}
                        onMouseLeave={dehoverInstagram}
                        alt='Instagram Link'/>
                    </a>
                </button>
                <button className='ContactButton'>
                    <a href='https://www.zalo.com' target='_blank' rel='noopener noreferrer'>
                        <img src={Zalo} 
                        onMouseEnter={hoverZalo}
                        onMouseLeave={dehoverZalo}
                        alt='Zalo Link'/>
                    </a>
                </button>
                <button className='ContactButton'>
                    <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                        <img src={Email} 
                        onMouseEnter={hoverEmail}
                        onMouseLeave={dehoverEmail}
                        alt='Email Link'/>
                    </a>
                </button>
        </div>
    )
}
