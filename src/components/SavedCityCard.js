import '../styles/SavedCityCard.css'
const SavedCityCard = ({ cityName, country, remove, id, image, location, places }) => {

    return (
        <div id="cityDiv">
            <div id="deleteBtnDiv" >
                <button id="deleteBtn" onClick={() => remove({ id })}>
                    <img id="trashImg" src='https://api.iconify.design/ph/trash.svg?color=%23b8bc00' width="30">
                    </img>
                </button>
            </div>
            <p id="city">{cityName},</p>
            <p id="country">{country}</p>
            <div id="location">{location}</div>
            <div id="imageDiv"><img src={image} alt="Country" id="cityImage"></img></div>


            <div id="placesDiv">
                {places}
            </div>
        </div>
    )
}

export default SavedCityCard