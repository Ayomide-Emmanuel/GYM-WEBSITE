import './styles/services.css'
const Services = () => {
  return (
    <div>
      
      <div className="top">
        <h3>Flexible Membership Options</h3>
        <p>
          We Know Decision Making Is Hard,But Dont Sweat It.Choose The
          Membership That's Right For <br />
          You And Start Perspiring To Greatness
        </p>
      </div>
      <div className="flex-wrap">
        <div className="first">
          <div className="select">
            <p>Peak results</p>
            <h4>$29.99</h4>
            <p id='month'>monthly recurring payment</p>
            <hr />
            <p id='month'>access to all clubs</p>
            <button>SELECT</button>
          </div>
          <div className="includes">
            <h3>INCLUDES</h3>
            <p>
              Cardio,Weights & Machines <br />
              Locker Rooms with Showers <br />
              Free Wi-Fi <br />
              CrunchONE Kickoff <br />
              Power Half Hour Circuit Training <br />
              Group Fitness Classes <br />
              Crunch Live Online Workouts <br />
              Free T-shirt <br />
              Ride Classes <br />
              HydroMassage@ <br />
              Tanning <br />
              Guest Priviledges <br />
              Advanced HIIT Classes
            </p>

            <h3 className='avail'>AVAILABLE ADD-ONS</h3>
            <p>Personal Training</p>
          </div>
        </div>
        <div className="second">
          <div className="select">
            <p>Peak </p>
            <h4>$23.99</h4>
            <p id='month'>monthly recurring payment</p>
            <hr />
            <p id='month'>access to all clubs</p>
            <button>SELECT</button>
          </div>
          <div className="includes">
            <h3>INCLUDES</h3>
            <p>
              Cardio,Weights & Machines <br />
              Locker Rooms with Showers <br />
              Free Wi-Fi <br />
              CrunchONE Kickoff <br />
              Power Half Hour Circuit Training <br />
              Group Fitness Classes <br />
              Crunch Live Online Workouts <br />
              Free T-shirt <br />
              Ride Classes <br />
           
            </p>

            <h3 className='avail'>AVAILABLE ADD-ONS</h3>
            <p>Personal Training</p>
          </div>
        </div>
        <div className="third">
          <div className="select">
            <p>base</p>
            <h4>$10.99</h4>
            <p id='month'>monthly recurring payment</p>
            <hr />
            <p id='month'>access to all clubs</p>
            <button>SELECT</button>
          </div>
          <div className="includes">
            <h3>INCLUDES</h3>
            <p>
            Free Wi-Fi <br />
            Power Half Hour Circuit Training <br />
            CrunchONE Kickoff <br />

              Locker Rooms with Showers <br />
           Cardio,Weights & Machines
            </p>

            <h3 className='avail'>AVAILABLE ADD-ONS</h3>
            <p>Personal Training</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
