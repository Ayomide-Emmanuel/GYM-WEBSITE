import lct1 from '../assets/Group 28.png'
import lct2 from '../assets/Group 26.png'
import './styles/locations.css'
const Locations = () => {
  return (
    <div className='locations'>
      <h3>Find an Altiral Gym Near You</h3>
      <div className="images">
        <img src={lct2} alt="" />
        <img src={lct1} alt="" />
        <img src={lct1} alt="" />
        <img src={lct1} alt="" />
        <img src={lct1} alt="" />

      </div>
    </div>
  )
}

export default Locations