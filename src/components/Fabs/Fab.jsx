import FabButton from "./FabButton";

const Fab = ({ couchImg, owner, location, addDate}) => {

    return (

        <div className="fab">
            <img src={couchImg} alt="couch image" />
            <FabButton/>
            <p>{owner}</p>
            <p>{location}</p>
            <p>{addDate}</p>
        </div>

     
    )

}

    

export default Fab;