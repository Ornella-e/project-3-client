
export default function CouchItem({ image, username,  description, location, evaluations, calendar, }) {


    if(false){
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <div className='couch' >
          <img src={image} alt="couchImg" />
          <p>user: {username}</p>

          <p>Description: {description}</p>
          <p>Country: {location.country}</p>
          <p>City: {location.city}</p>
          <p>Evaluations: {evaluations}</p>
          <p>Calendar: {calendar}</p>
          
          <button>Delete couch</button>
        </div>
      )
    } 
  }