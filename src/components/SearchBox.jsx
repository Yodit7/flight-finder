import { styled } from "styled-components";
import { LuPlaneTakeoff, LuPlaneLanding, LuCalendarDays } from "react-icons/lu"
import { BiUserCircle, BiPlus, BiMinus } from "react-icons/bi"
import { MdOutlineFlightClass } from "react-icons/md"
import { useState, useEffect } from "react";
import React from "react";
import Select  from "react-select"
import Calendar from "react-calendar"
import DatePicker from "react-datepicker"
import axios from "axios";
import SearchResult from "./SearchResult";

const Container = styled.div`
`;

const Box = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0px auto;
    background-color: white;
    border-radius: 15px;
    display: grid;
    grid-template-rows: repeat(2, 1fr); 
    grid-template-columns: 85% 15%;
    row-gap: 25px;
    align-items: center;
    padding: 25px 0px;
    color: rgb(25, 31, 49);
`;

const Airport = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    width: 100%;

    input {
        height: 20px;
        padding: 2px;
        border: none;
        width: 100%;
    }

    .bottom-line {
        border-bottom: 1px solid grey;
        padding-bottom: 25px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 10px;
        width: auto;

        .icon {
            font-size: 22px;
            color: rgb(74, 170, 158);
        }

        .css-13cymwt-control {
            border-color: grey;
            border-radius: 10px;
            padding: 1px 0px;
        }
    }

    .airport-container {
        display: flex;
        flex-direction: column;
        align-items: start;

        .title {
            font-weight: 600;
        }
    }

    .css-1nmdiq5-menu {
        color: red;
        flex-wrap: wrap;
    }

`;


const Row = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    max-width: 400px;
    width: 100%;
    border: 1px solid grey;
    padding: 10px 15px;
    border-radius: 10px;

    .icon {
        padding-right: 15px;
        border-right: 1px solid grey;
        font-size: 26px;
        color: grey;
        cursor: pointer;
    }

    input {
        height: 30px;
        font-size: 18px;
    }

    input:focus {
        outline: none;
    }

    .airport_selection {
        border: none;
        box-shadow: none;
        width: 350px;
    }
`;

const Roundtrip = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: center;


    input {
        height: 20px;
        width: 145px;
        padding: 2px;
    }

    .filter {
        width: 190px;
        display: flex;
        flex-direction: row;
        gap: 15px;
        border: 1px solid grey;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
    
        .icon {
            padding-right: 15px;
            border-right: 1px solid grey;
            font-size: 26px;
            color: grey;
        }
    
        p {
            font-size: 14px;
        }
    }

    .select-date {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 25px;
        height: auto;
    }

    .calendar-popup {
        z-index: 9999;
        width: 100%;

        .title {
            font-weight: 600;
            margin-bottom: 15px;
        }

        .react-datepicker__input-container input {
            border: none;
            z-index: 1;
        }

        .react-datepicker-popper {
            z-index: 9999;
        }

        .react-datepicker__navigation {
            background-color: grey;
            color: white;
            margin: 5px 2px;
            padding: 2px 8px;
            border-radius: 15px;
            border-style: none;
        }

        .react-datepicker__month-container {
            border: 1px solid grey;
            border-radius: 10px;
            font-size: 12px;
            background-color: white;
        }

        .react-datepicker__header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            background-color: rgb(25, 31, 49);
            color: white;
            padding: 5px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            .react-datepicker__current-month {
                margin-bottom: 8px;
                font-weight: 600;
            }
        }
        
        .react-datepicker__aria-live {
            display: none;
        }

        .react-datepicker__day-names {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            width: 100%;
        }
        
        .react-datepicker__day-name {
            width: 30px;
            text-align: center;
            font-weight: 600;
        }

        .react-datepicker__month {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
        }

        .react-datepicker__week {
            margin: 4px 0px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .react-datepicker__day {
            padding: 4px 0px;
            width: 30px;
            text-align: center;
            cursor: pointer;
        }

        .react-datepicker__day:hover {
            background-color: grey;
            border-radius: 5px;
            color: white;
        }

    }
`; 

const Search = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: end;
    font-size: 16px;


    .border {
        display: flex;
        align-items: center;
        gap: 10px;
        border: 1px solid grey;
        padding-right: 15px;
        padding-top: 8px;
        padding-bottom: 8px;
        border-radius: 10px;
        cursor: pointer;
    }

    .icon {
        font-size: 20px;
        color: rgb(74, 170, 158);
        padding-left: 8px;
    }

    .row {
        align-items: center;
    }

    .no-border {
        align-self: center;
    }

    .no-border-bottom {
        align-self: center;
        margin-top: 28px;
    }

    .dropdown {
        z-index: 9999;
        position: absolute;
        left: 0%;
        top: 120%;
        width: 200px;
        height: 125px;
        background-color: white;
        box-shadow: 0px 0px 5px grey;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: black;

        label {
            margin: 10px;
            font-weight: 600;
        }
    }

    .traveler-row {
        display: flex;
        justify-content: space-between;
        padding: 10px;

        .traveler-counter {
            display: flex;
            align-items: center;

            .traveler-icon {
                margin: 0px 5px;
                font-weight: 600;
                background-color: rgb(98, 121, 140);
                color: white;
                border-radius: 3px;
                cursor: pointer;
            }
        }
    }

    .cabin-class-dropdown {
        position: absolute;
        background-color: white;
        box-shadow: 0px 0px 10px grey;
        border-radius: 15px;
        width: 200px;
        height: 125px;
        z-index: 9999;
        top: 120%;
        left: 33%;
        display: flex;
        flex-direction: column;
        
        label {
            margin: 10px;
            font-weight: 600;
        }

        select {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin: 18px 10px;
        }
    }

`;

const SearchButton = styled.button`
    height: 40px;
    width: 100px;
    padding: 0 20px;
    background-color: rgb(5, 32, 60);
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 25px;
    justify-self: center;
    grid-row-start: 2;

    div {
        display: flex;
        gap: 10px;
    }

    input {
        font-size: 12px;
    }
`;

const SelectDate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-row-start: 2;

    .traveller-container {
        height: 100px;
        background-color: green;
    }

    .row {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    .row-travel-details {
        display: flex;
        flex-direction: column;
        position: relative; 

        .column {
            display: flex;
            flex-direction: row;
            gap: 25px;
        }
    }

    .datepick-title {
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

const DatePick = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid grey;
    padding-right: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 10px;
    cursor: pointer;

    .icon {
        color: rgb(74, 170, 158);
        font-size: 20px;
        padding-left: 8px;
    }

    .date-select {
        font-size: 15px;
    }

    .react-datepicker__input-container input {
        border: none;
        z-index: 1;
        width: 100px;
        cursor: pointer;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .react-datepicker-popper {
        z-index: 9999;
        margin-top: 15px;
        background-color: rgb(5, 32, 60);
        border-radius: 15px;
        box-shadow: 0px 0px 10px grey;
    }

    .react-datepicker__navigation {
        background-color: rgb(98, 121, 140);
        color: white;
        margin: 5px 2px;
        padding: 2px 8px;
        border-radius: 6px;
        border-style: none;
        justify-content: space-between;

    }

    .react-datepicker__month-container {
        border-radius: 10px;
        font-size: 12px;
        background-color: white;
    }

    .react-datepicker__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        background-color: rgb(5, 32, 60);
        color: white;
        padding: 5px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        .react-datepicker__current-month {
            margin-bottom: 8px;
            font-weight: 600;
        }
    }
    
    .react-datepicker__aria-live {
        display: none;
    }

    .react-datepicker__day-names {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
    }
    
    .react-datepicker__day-name {
        width: 30px;
        text-align: center;
        font-weight: 600;
    }

    .react-datepicker__month {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .react-datepicker__week {
        margin: 4px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .react-datepicker__day {
        padding: 4px 0px;
        width: 30px;
        text-align: center;
        cursor: pointer;
    }

    .react-datepicker__day:hover {
        background-color: grey;
        border-radius: 5px;
        color: white;
    }

    .react-datepicker button {
        margin: 10px 20px;
        cursor: pointer;
    }

`;


const SearchBox = () => {
    const [value, onChange] = useState(new Date());
    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState([]);
    const [open, setOpen] = useState(false);
    const [airport, setAirport] = useState([]);

    const [departDate, setDepartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    const [departures, setDepartures] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [selectedDepatureLocation, setSelectedDepartureLocation] = useState("");
    const [selectedDestinationLocation, setSelectedDestinationLocation] = useState("");


    const [showCalendar, setShowCalendar] = useState(false);

    const [showTraveler, setShowTraveler] = useState(false);
    const [traveler, setTraveler] = useState(1);
    const [children, setChildren] = useState(0);

    const [showCabinClass, setShowCabinClass] = useState(false);
    const [cabinClass, setCabinClass] = useState("");
    const [selectedCabinClass, setSelectedCabinClass] = useState("Economy");

    useEffect(() => {
         // getAirport();
    }, [])

    // GET AIRPORT
    const getAirport = async () => {
        const options = {
          method: 'GET',
          url: 'https://skyscanner-api.p.rapidapi.com/v3/geo/hierarchy/flights/en-US',
          headers: {
            'X-RapidAPI-Key': 'e8ecc1aaa1msha02f8c02f148d1ep17353bjsncdad97be0765',
            'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
          }
        };
      
        try {
          const response = await axios.request(options);
          const places = response.data.places;
          

          const departureOptions = Object.values(places).map((airport) => ({
              value: airport.id,
              label: (
                <React.Fragment>
                    <div className="center">
                        <LuPlaneTakeoff /> {airport.name} - {airport.iata}
                    </div>
                </React.Fragment>
            )
          }));
      
          const destinationOptions = Object.values(places).map((airport) => ({
            value: airport.id,
            label: (
              <React.Fragment>
                <div className="center">
                  <LuPlaneLanding /> {airport.name} - {airport.iata}
                </div>
              </React.Fragment>
            )
          }));
      
          setDepartures(departureOptions);
          setDestinations(destinationOptions);
        } catch (error) {
          console.error(error);
        }
    };
    

    // function to handle destination selection
    const handleDestinationSelect = (event) => {
        const selectedDestination = event.target.value;
        setSelectedDestinationLocation(selectedDestination)
    }
    
    // GET CALENDAR
    const toggleCalendarDropdown = async () => {
        setShowCalendar((prevShow) => !prevShow)
    }

    // GET TRAVELLER
    const toggleTravelerDropdown = () => {
        setShowTraveler((prevShow) => !prevShow);
        setShowCabinClass(false);
        
    }

    /** handle adults */
    const getTraveler = () => {
        var travelerCount = traveler + 1;
        if(travelerCount <= 0) {
            setTraveler(0);
        } else {
            setTraveler(travelerCount);
        }
    }

    const getTravelerMinus = () => {
        var travelerCount = traveler - 1;
        if(travelerCount <= 0) {
            setTraveler(0);
        } else {
            setTraveler(travelerCount);
        }
    }

    /** handle children */
    const getTravelerChildren = () => {
        var childrenCount = children + 1;
        if(childrenCount <= 0){
            setChildren(0);
        } else {
            setChildren(childrenCount);
        }
    }

    const getTravelerChildrenMinus = () => {
        var childrenCount = children - 1;
        if(childrenCount <= 0){
            setChildren(0);
        } else {
            setChildren(childrenCount);
        }
    }

    // GET CABIN CLASS
    const toggleCabinClassDropdown = async () => {
        setShowCabinClass((prevShow) => !prevShow);
        setShowTraveler(false);
    }

    // function to handle cabin class selection
    const handleCabinClassSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedCabinClass(selectedValue);
    }

    return (
        <>
            <Container>
                <Box>
                    <Airport>
                        <div className="airport-container">
                            <p className="title">Departure</p>
                            <div>
                                <LuPlaneTakeoff className="icon"/>
                                <Select 
                                    options={departures}
                                    onChange={handleDestinationSelect} 
                                />  
                            </div>
                        </div>
                        <div className="airport-container">
                            <p className="title">Destination</p>
                            <div>
                                <LuPlaneLanding className="icon"/>
                                <Select 
                                    options={destinations} 
                                    placeholder="Destination..." 
                                    onChange={handleDestinationSelect} 
                                />    
                            </div>
                        </div>
                    </Airport>
                    <SelectDate>
                        <Search>
                            <div className="row">
                                <div className="datepicker-container">
                                    <p className="datepick-title">Depart</p>
                                    <DatePick>
                                        <LuCalendarDays className="icon" />
                                        <DatePicker selected={departDate} 
                                            onChange={(date) => setDepartDate(date)} 
                                            dateFormat="dd/MM/yyyy" 
                                            className="date-select" 
                                        />    
                                    </DatePick>
                                </div>
                                <div className="datepicker-container">
                                    <p className="datepick-title">Return</p>
                                    <DatePick>
                                        <LuCalendarDays className="icon" />
                                        <DatePicker selected={returnDate} 
                                            onChange={(date) => setReturnDate(date)} 
                                            dateFormat="dd/MM/yyyy" 
                                            className="date-select" 
                                            minDate={departDate}
                                        />    
                                    </DatePick>
                                </div>
                                <div className="no-border-bottom">
                                    <input type="radio" name="one-way" /> One Way
                                </div>
                            </div>
                            <div className="row-travel-details">
                                <p className="datepick-title">Travel Details</p>
                                <div className="column">
                                    <div className="border" onClick={toggleTravelerDropdown}>
                                        <BiUserCircle className="icon" />
                                        <p>Traveler</p>
                                    </div>
                                    {showTraveler && (
                                        <div className="dropdown">
                                            <label>Travelers</label>
                                            <div>
                                                <div className="traveler-row">
                                                    <p>Adults</p>
                                                    <div className="traveler-counter">
                                                        <BiMinus onClick={getTravelerMinus} className="traveler-icon"/> {traveler} <BiPlus onClick={getTraveler} className="traveler-icon"/>
                                                    </div>
                                                </div>
                                                <div className="traveler-row">
                                                    <p>Children</p>
                                                    <div className="traveler-counter">
                                                        <BiMinus onClick={getTravelerChildrenMinus} className="traveler-icon"/> {children} <BiPlus onClick={getTravelerChildren} className="traveler-icon"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="border" onClick={toggleCabinClassDropdown}>
                                        <MdOutlineFlightClass className="icon" />
                                        <p>Cabin Class</p>
                                    </div>
                                    {showCabinClass && (
                                        <div className="cabin-class-dropdown">
                                            <label for="cabin-class-select">Cabin class</label>
                                            <select id="cabin-class-select" value={selectedCabinClass} onChange={handleCabinClassSelect}>
                                                <option value="Economy">Economy</option>
                                                <option value="Premium Economy">Premium Economy</option>
                                                <option value="Business Class">Business Class</option>
                                                <option value="First Class">First Class</option>
                                            </select>
                                        </div>
                                    )}
                                    <div className="no-border">
                                        <input type="radio" name="direct-flight" /> Direct Flight
                                    </div>
                                </div>
                            </div>
                        </Search>
                    </SelectDate>
                    <SearchButton>Search</SearchButton>
                </Box>
            </Container> 
            <SearchResult 
                departDate={departDate}
                setDepartDate={setDepartDate}
                returnDate={returnDate}
                traveler={traveler}
                children={children}
                selectedCabinClass={selectedCabinClass}
            />
        </>
    )
}

export default SearchBox;