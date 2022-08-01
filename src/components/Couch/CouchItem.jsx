
export default function CouchItem({  image, username, title, description, location, evaluations, calendar }) {


    if(false){
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <div className='couch' >
         
          <img src={image} alt="couchImg" />
          <p>user: {username}</p>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Location: {location}</p>
          <p>Evaluations: {evaluations}</p>
          <p>Calendar: {calendar}</p>
          
        </div>
      )
    } 
  }