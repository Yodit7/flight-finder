import { styled } from "styled-components"
import { HiOutlineMinusSm, HiSearch, HiChevronLeft, HiChevronRight, HiMinus, HiOutlineChevronDown } from "react-icons/hi";
import { IoAirplaneSharp } from "react-icons/io5";
import { useState } from "react";

const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    background-color: white;
    margin: 0px auto;
    border-radius: 15px;
    padding: 25px 0px;
    margin-top: 50px;
`;

const Requirements = styled.div`
    display: grid;
    grid-template-columns: 40px repeat(2, 1fr);
    gap: 15px;
    padding: 20px 0px;
    border-bottom: 1px solid black;
    max-width: 850px;
    width: 100%;
    margin: 0px auto;

    .icon {
        font-size: 35px;
        color: white;
        border: 1px solid rgb(74, 170, 158);
        padding: 5px;
        border-radius: 5px;
        background-color: rgb(74, 170, 158);
        align-self: center;
    }

    ul {
        list-style: none;
        font-size: 14px;
    }

    .location {
        display: flex;
        align-items: center;
    }

    .space {
        margin: 0px 10px;
    }

    .row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 5px;

        li {
            border: 1px solid grey;
            padding: 5px;
            border-radius: 5px;
            font-size: 12px;
        }
    }

    .req-changable {
        display: flex;
        gap: 10px;
        justify-content: end;

        li {
            display: flex;
            gap: 10px;
        }

        .chevron {
            margin-top: 2px;
            cursor: pointer;
        }
    }

`;

const Results = styled.ul`
    margin: 10px 30px;
`;


const Headline = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 850px;
    width: 100%;
    margin: 0px auto;

    .center {
        display: flex;
        align-items: end;
        gap: 5px;
    }

    .down {
        cursor: pointer;
    }
`;

const TopResults = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    max-width: 850px;
    width: 100%;
    margin: 75px auto;
`;

const TopResult = styled.ul`
    list-style: none;
    background-color: rgb(25, 31, 49);
    padding: 15px 40px;
    color: white;
    border-radius: 15px;
    
    li {
        padding: 5px 0px;
    }

    .top-result-headline {
        color: rgb(74, 170, 158);
        font-weight: 600;
    }
`;  

const Result = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 600px 150px;
    gap: 50px;
    border: 1px solid grey;
    padding: 20px 25px;
    border-radius: 15px;

    
    .result-row {
        display: grid;
        grid-template-columns: 25% 75%;
        grid-column: 1;

        a {
            margin-right: 50px;
        }
    }

    .result-right {
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;
    }

`;

const Button = styled.button`
    background-color: rgb(74, 170, 158);
    border: none;
    border-radius: 10px;
    font-size: 16px;
    height: 50px;
    color: white;
    font-weight: 600;
    grid-row: 1;
    grid-column: 2;
    cursor: pointer;
`;

const FlightInfo = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

`;

const Duration = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    gap: 4px;

    .stretch {
        color: green;
        
    }
`;


const SearchResult = ({traveler, children, selectedCabinClass, departDate, returnDate, setDepartDate}) => {
    const [prevDate, setPrevDate] = useState("");
    const [nextDate, setNextDate] = useState("");


    // handle day before
    const handlePrevDepartDate = () => {
        const prevDate = new Date(departDate);
        prevDate.setDate(departDate.getDate() - 1);
        prevDate.toDateString();
        setPrevDate(prevDate);
        setDepartDate(prevDate);
    }

    const handlePrevReturnDate = () => {
        const prevDate = new Date(returnDate);
        prevDate.setDate(returnDate.getDate() - 1);
        prevDate.toDateString();
        setPrevDate(prevDate);
        setDepartDate(prevDate);
    }

    // handle day after
    const handleNextDate = () => {
        // const nextDate = new Date(departDate);
        // nextDate.setDate(departDate.getDate() - 1);
        // setNextDate(nextDate.toDateString());
        // setDepartDate(nextDate.toDateString());
    }

    console.log(nextDate);

    return (
        <Container>
            <Requirements>
                <HiSearch className="icon" />
                <ul className="req">
                    <li className="location">Departure Location <HiOutlineMinusSm class="space" /> Destination Location</li>
                    <ul className="row">
                        <li>{traveler + children} Traveler</li>
                        <li>{selectedCabinClass} </li>
                    </ul>
                </ul>
                <ul className="req-changable">
                    <li><HiChevronLeft className="chevron" onClick={handlePrevDepartDate}/>{departDate.toDateString()} <HiChevronRight className="chevron" onClick={handleNextDate}/></li>
                    <li><HiChevronLeft className="chevron" onClick={handlePrevReturnDate}/>{returnDate.toDateString()} <HiChevronRight className="chevron" onClick={handleNextDate}/></li>
                </ul>
            </Requirements>
            <Results>
                <Headline>
                    <p>100 Ergebnisse</p>
                    <p className="center">Sortieren nach Preis<HiOutlineChevronDown className="down" /></p>
                </Headline>
                <TopResults>
                    <TopResult>
                        <li className="top-result-headline">Bestes Angebot</li>
                        <li>360€</li>
                        <li>2 Std. (im Durchschnitt)</li>
                    </TopResult>
                    <TopResult>
                        <li className="top-result-headline">Billigster Flug</li>
                        <li>360€</li>
                        <li>2 Std. (im Durchschnitt)</li>
                    </TopResult>
                    <TopResult>
                        <li className="top-result-headline">Kürzeste Reisedauer</li>
                        <li>360€</li>
                        <li>2 Std. (im Durchschnitt)</li>
                    </TopResult>
                </TopResults>
                <Result>
                    <div className="result-row">
                        <a href="">Airline Logo</a>
                        <div className="result-right">
                            <FlightInfo>
                                <li>17:50</li>
                                <li>FRA</li>
                            </FlightInfo>
                            <Duration>
                                <li>2 Std</li>
                                <li><HiMinus /> <IoAirplaneSharp /> <HiMinus /></li>
                                <li>Direkt</li>
                            </Duration>
                            <FlightInfo>
                                <li>17:50</li>
                                <li>FRA</li>
                            </FlightInfo>
                        </div>
                    </div>
                    <div className="result-row">
                        <a href="">Airline Logo</a>
                        <div className="result-right">
                            <FlightInfo>
                                <li>17:50</li>
                                <li>FRA</li>
                            </FlightInfo>
                            <Duration>
                                <li>2 Std</li>
                                <li><HiMinus /> <IoAirplaneSharp /> <HiMinus /></li>
                                <li>Direkt</li>
                            </Duration>
                            <FlightInfo>
                                <li>17:50</li>
                                <li>FRA</li>
                            </FlightInfo>
                        </div>
                    </div>
                    <Button>Angebot prüfen</Button>
                </Result>
            </Results>
        </Container>
    )
}

export default SearchResult;