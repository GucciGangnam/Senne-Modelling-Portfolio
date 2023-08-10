// import styles
import './Page1.css'        

//script
export const Page1 = () => { 
    return ( 
        <div className='Page1'> 

            <img src='/Images/Hero.jpg' className='CoverPhoto' alt='CoverPhoto'/>

            <div className='CoverText'>
                <div className='NameText'>
                    Senne Mercken
                </div>
                <div className='OccupationText'>
                &nbsp;MODEL
                </div>
                <div className='LocationText'>
                    Ho Chi Minh
                </div>
            </div>

        </div>
    )
}