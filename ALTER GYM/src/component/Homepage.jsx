import './styles/homepg.css'
import bg from '../assets/_DSC8209 2.png'

const Homepage = () => {
  return (
    
    <>  
      <div className="header">
      <img src={bg} alt="" />
<div className="bg-text">
        <h2><span>HARD</span> WORK, <span>HARD</span> GAIN. </h2>
        <h4>MEMBERSHIPS STARTS AT 99.99MAD/MONTH</h4>
        <button className='join'>JOIN NOW</button>
        </div>
      </div>
      <div className="orange">
        <h4>CLOSEST CLUB</h4>
        <h3>YOUR LOCAL GYM @  RABAT <span>EDIT</span></h3>
        <div className="btns">
          <button>LOCATIONS</button>
          <button>JOIN NOW</button>
       
        </div>
      </div>
      <div className="group-b">
        <div className="alt">
          <hr />
          <h4>Altiraser N1</h4>
          <hr />
        </div>
        <h3>Our Gym is Your Gym</h3>
      <p>Kick your feet up! With a gym designed around you,we think you'll love it here.</p>
      <div className="group">
        <h2>GROUP FITNESS CLASSES</h2>
        <p>We design our clubs to give you the most awesome <br />
        workouts possible.That's why our dedicated group <br /> fitness
        studios are four walls of innovative,hard <br />
        work,fun</p>
      </div>
      </div>
    </>
  )
}

export default Homepage