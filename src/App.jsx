import React from 'react';
import img1 from './assets/images/createpost.webp';
import img2 from './assets/images/fivestars.webp';
import img3 from './assets/images/platforms.webp';
import img4 from './assets/images/Vector purple box.png';
import img5 from './assets/images/august2024.png';
import img6 from './assets/images/week.png';
import img7 from './assets/images/checked.png';
import './App.css'


function App() {
  

  return (
    <>
      <div className='container'>
       <div className='m-grid1'>
          <div className='grid1-flex1'>
            <h3>Create and schedule content <span className='lastword'>quicker.</span></h3>
            <img src={img1} />
          </div>
          <div className='grid1-flex2'>are</div>
       </div>
       <div className='m-grid2'>          
            <div className='g2-fx1-g1'>
              <p>Social media <span className='tenx'>10x</span><br/> <span className='faster'>Faster</span>  with AI</p>
              <img src={img2} className='g2-img'/>
              <p className='p2'>Over 4,000 5-star reviews</p>
              </div>
            <div className='g2-fx1-g2'></div>
            <div className='g2-fx1-g3'>
              <img src={img3} className='g3-img'style={{width: '330px'}}/>
              <span className='transparent'></span>
              <p>Manage multiple accounts and platforms.</p>
            </div>
            <div className='g2-fx1-g4' >
              <p style={{marginTop:'12px', marginBottom:'10px'}}>Maintain a consistent posting schedule.</p>
              <div className='schedulebox'>
                <img src={img4} className='purplebox' />
                <img src={img5} className='august'/>
                <img src={img6} className='week'/>
                <div className='whitebox'>
                  <img src={img7} className='checked' alt="checked sign" />
                  <img src={img7} className='checked' alt="checked sign" />
                  <img src={img7} className='checked' alt="checked sign" />
                  <img src={img7} className='checked' alt="checked sign" />
                </div>
              </div>
              
            </div>
            <div className='g2-fx1-g5'></div>
            <div className='g2-fx1-g6'></div>                  
        </div>
       

      </div>
    </>
  )
}

export default App
