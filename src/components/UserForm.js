import React, { useState } from "react";
import { Link } from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import '../styles/UserForm.css';

const UserForm = () => {

    const [formData, setFormData] = useState({
        entertainment: "entertainment",
        accommodation: "accommodation",
        natural: "natural",
        catering: "catering",
        tourism: "tourism"
    })

    const storeData = (data) => {
        const stringifiedData = JSON.stringify(data)
        window.localStorage.setItem("formData", stringifiedData)
    }

    const handleChange = (e) => {
        setFormData(prevData => {
            const updatedForm = {
                ...prevData,
                [e.target.name]: e.target.value
            }
            storeData(updatedForm)
            return updatedForm
        })
    }


    const form = (
        <form>
            <div className="searchCategories">
                <label htmlFor="entertainment">Where Do You Like to Go for Entertainment?</label>
                <div className="select">
                    <select id="entertainment" name="entertainment" onChange={handleChange}>
                        <option hidden value="">Select An Option</option>
                        <option value="entertainment.aquarium">Aquariums</option>
                        <option value="entertainment.culture">Cultural Attractions</option>
                        <option value="entertainment.museum">Museums</option>
                        <option value="entertainment.theme_park">Theme Parks</option>
                        <option value="entertainment.zoo">Zoos</option>
                        <option value="entertainment">Surprise Me!</option>
                    </select>
                </div>
            </div>
            <div className="searchCategories">
                <label className="question" htmlFor="accommodation">Where Do You Like To Stay?</label>
                <div className="select">
                    <select id="accommodation" name="accommodation" onChange={handleChange}>
                        <option hidden value="">Select An Option</option>
                        <option value="accommodation.apartment">Apartments</option>
                        <option value="accommodation.chalet">Chalets</option>
                        <option value="accommodation.hostel">Hostels</option>
                        <option value="accommodation.hotel">Hotels</option>
                        <option value="accommodation.motel">Motels</option>
                        <option value="accommodation">Surprise Me!</option>
                    </select>
                </div>
            </div>
            <div className="searchCategories">
                <label className="question" htmlFor="natural">What Do You Like to See in Nature?</label>
                <div className="select">
                    <select id="natural" name="natural" onChange={handleChange}>
                        <option hidden value="">Select An Option</option>
                        <option value="natural.forest">Forests</option>
                        <option value="natural.mountain">Mountains</option>
                        <option value="national_park">National Parks</option>
                        <option value="natural.water">Water Bodies</option>
                        <option value="natural">Surprise Me!</option>
                    </select>
                </div>
            </div>
            <div className="searchCategories">
                <label className="question" htmlFor="tourism">What Attractions Do You Like to See?</label>
                <div className="select">
                    <select id="tourism" name="tourism" onChange={handleChange}>
                        <option hidden value="">Select An Option</option>
                        <option value="tourism.attraction.artwork">Art</option>
                        <option value="tourism.sights.castle">Castles</option>
                        <option value="tourism.sights.memorial">Memorials</option>
                        <option value="tourism.sights.place_of_worship">Places of Worship</option>
                        <option value="tourism.sights.ruines">Ruins</option>
                        <option value="tourism.sights">Surprise Me!</option>
                    </select>
                </div>
            </div>
            <div className="searchCategories">
                <label className="question" htmlFor="catering">What Kind of Cuisine Do You Like?</label>
                <div className="select">
                    <select id="catering" name="catering" onChange={handleChange}>
                        <option hidden value="">Select An Option</option>
                        <option value="catering.restaurant.asian">Asian Cuisine</option>
                        <option value="catering.restaurant.barbecue">Barbeque</option>
                        <option value="catering.cafe">Cafes</option>
                        <option value="catering.cafe.dessert">Dessert</option>
                        <option value="catering.fast_food">Fast Food</option>
                        <option value="catering.restaurant.indian">Indian Cuisine</option>
                        <option value="catering.restaurant.latin_american">Latin American Cuisine</option>
                        <option value="catering.restaurant.mediterranean">Mediterranean Cuisine</option>
                        <option value="catering.restaurant.seafood">Seafood</option>
                        <option value="catering.restaurant.western">Western Cuisine</option>
                        <option value="catering">Surprise Me!</option>
                    </select>
                </div>
            </div>
            <Link to='/cities'>
                <button id="submitBtn">Generate Random Destinations!</button>
            </Link>
        </form>)

    // -----------------------------------RETURN STATEMENT-------------------------------------------//
    return (

        <div>

            <div id="image">
                <div id="destinationDiv">
                    <h2 id="firstDestinationHeader">Let us help you find your perfect </h2>
                    <h2 id="secondDestinationHeader">Travel Destination</h2>
                    <h3 id="choose">Choose some of your interests to get started!</h3>
                </div>
                <div id="formDiv"> {form}</div>

                <NavigationBar></NavigationBar>

            </div>


        </div>
    )
}

export default UserForm; 