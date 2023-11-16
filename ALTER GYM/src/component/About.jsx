import cat from '../assets/getty.png'
import './styles/about.css'
const About = () => {
  return (
    <>
    <div className='abt-page'>
      <img src={cat} alt="" />
      <div className="about-text">
   <h3>ABOUT US</h3>
   <div className="first-p">
    <p>Some May Call it A Tagline,But For Us, It's A way of Life. It's our Monday- <br />
    Thru-Every-Day Mantra.An Unfiltered Philosophy That Drives Us To Create A <br />
    Community And A Gym For All. </p>
    <p>Our Training Philosophy Means Room For Everyone,Regardless Of Shape,<br />
    Size,Age,Race, Gender Or Fitness Level.No Matter Your Workout Of Choice, <br />
    We Want You To Feel Good While Reaching Your Goals.Join The Fun </p>
   </div>
      </div>
    </div>
      <hr />
     </>
  )
}

export default About