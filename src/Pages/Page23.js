// import styles 
import './Page23.css'

export const Page23 = () => { 

    //Dipslay collewction functions
    function DisplayCollection1() { 
        console.log("collection1 clicked");
        let collection1 = document.querySelector('.Overlay1');
        collection1.style.display = 'grid';

        let dots = document.querySelector('.SlideDots')
        dots.classList.add('open');
        dots.innerHTML = 'X';


        dots.addEventListener('click', function(){
            collection1.style.display = 'none';
            dots.classList.remove('open');
            dots.innerHTML = '• ◦ •';
        })
    }
    function DisplayCollection2() { 
        console.log("collection2 clicked");
        let collection2 = document.querySelector('.Overlay2');
        collection2.style.display = 'grid';

        let dots = document.querySelector('.SlideDots')
        dots.classList.add('open');
        dots.innerHTML = 'X';

        dots.addEventListener('click', function(){
            collection2.style.display = 'none';
            dots.classList.remove('open');
            dots.innerHTML = '• ◦ •';
        })
    }
    function DisplayCollection3() { 
        console.log("collection3 clicked");
        let collection3 = document.querySelector('.Overlay3');
        collection3.style.display = 'grid';

        let dots = document.querySelector('.SlideDots')
        dots.classList.add('open');
        dots.innerHTML = 'X';

        dots.addEventListener('click', function(){
            collection3.style.display = 'none';
            dots.classList.remove('open');
            dots.innerHTML = '• ◦ •';
        })
    }
    function DisplayCollection4() { 
        console.log("collection4 clicked");
        let collection4 = document.querySelector('.Overlay4');
        collection4.style.display = 'grid';

        let dots = document.querySelector('.SlideDots')
        dots.classList.add('open');
        dots.innerHTML = 'X';

        dots.addEventListener('click', function(){
            collection4.style.display = 'none';
            dots.classList.remove('open');
            dots.innerHTML = '• ◦ •';
        })
    }



    return ( 
        <div className='Page23'> 
            <div className='Overlay1'> 
            <img className='CollectionPhoto' src='./Images/BrandA2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA6.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA6.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA6.jpg' alt='Brand Image'/>
            </div>

            <div className='Overlay2'> 
            <img className='CollectionPhoto' src='./Images/BrandB3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandB5.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandB8.jpeg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandB3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandB5.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandB8.jpeg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandB3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandB5.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandB8.jpeg' alt='Brand Image'/>
            </div>

            <div className='Overlay3'> 
            <img className='CollectionPhoto' src='./Images/BrandC1.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandC2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandC3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandC1.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandC2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandC3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandC1.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandC2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandC3.jpg' alt='Brand Image'/>
            </div>

            <div className='Overlay4'> 
            <img className='CollectionPhoto' src='./Images/BrandA2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA6.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA6.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA2.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA3.jpg' alt='Brand Image'/>
            <img className='CollectionPhoto' src='./Images/BrandA6.jpg' alt='Brand Image'/>
            </div>

            <div className='Slide'> 

            <div className='SlideDots'>
            • ◦ •
            </div>

                <div className='InnerSlide1'>
                    <div className='PictureDiv'>
                        <img className='BrandImage' src='./Images/BrandA2.jpg' alt='Brand Image'/>
                    </div>
                    <div className='BrandInfoDiv'>
                        <div className='BrandName1'>
                            SHIM STUDIO
                        </div>
                        <button className='CollectionButton'>
                            <img className='CollectionImage' onClick={DisplayCollection1} src='./Icons/Collection.png'/>
                        </button>
                    </div>
                </div>

                <div className='InnerSlide2'>
                    <div className='PictureDiv'>
                        <img className='BrandImage' src='./Images/BrandB8.jpeg' alt='Brand Image'/>
                    </div>
                    <div className='BrandInfoDiv'>
                        <div className='BrandName2'>
                            Ralph Lauren
                        </div>
                        <button className='CollectionButton'>
                            <img className='CollectionImage' onClick={DisplayCollection2} src='./Icons/Collection.png'/>
                        </button>
                    </div>
                </div>

                <div className='InnerSlide3'>
                    <div className='PictureDiv'>
                        <img className='BrandImage' src='./Images/BrandC3.jpg' alt='Brand Image'/>
                    </div>
                    <div className='BrandInfoDiv'>
                        <div className='BrandName3'>
                            THE SOUL
                        </div>
                        <button className='CollectionButton'>
                            <img className='CollectionImage' onClick={DisplayCollection3} src='./Icons/Collection.png'/>
                        </button>
                    </div>
                </div>

                <div className='InnerSlide4'>
                    <div className='PictureDiv'>
                        <img className='BrandImage' src='./Images/BrandA2.jpg' alt='Brand Image'/>
                    </div>
                    <div className='BrandInfoDiv'>
                        <div className='BrandName4'>
                            Brand
                        </div>
                        <button className='CollectionButton'>
                            <img className='CollectionImage' onClick={DisplayCollection4} src='./Icons/Collection.png'/>
                        </button>
                        
                    </div>
                </div>
                
            </div>
            


        </div>
    )
}