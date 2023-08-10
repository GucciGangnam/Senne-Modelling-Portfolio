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
                <div className='BrandCarousel'>
                    <div className='BrandCarousel-inner'>
                        Romano | Gucci | YSL | VietJet |  Casino9 | FaceBook |  YT Saigon |  Brand 8 |  Brand 9 |  Brand 10 |  Brand 11| Brand 12 | Brand 13 |  Brand 14 |  Brand 15 | Brand 16 |  Brand 17 |  Brand 18 |  Brand 19 |  Brand 20 |
                    </div>
                </div>
            </div>

        </div>
    )
}