<<<<<<< HEAD
export default function CouchItem({ image, id, owner, description, location, evaluations, calendar, }) {
  if(false){
    return (
      <p>Loading...</p>
    )
  } else {
    return (
      <div className='couch' >
        <img src={image} alt="couchImg" />
        <p>Id: {id}</p>
        <h3>Owner: {owner}</h3>
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
=======
export default function CouchItem({
  image,
  username,
  title,
  description,
  location,
  evaluations,
  calendar,
}) {
  if (false) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="couch">
        <img src={image} alt="couchImg" />
        <p>user: {username}</p>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Location: {location}</p>
        <p>Evaluations: {evaluations}</p>
        <p>Calendar: {calendar}</p>
      </div>
    );
  }
}
>>>>>>> e8b358c7c41c8e41cc036315487e0c9a33d529ca
