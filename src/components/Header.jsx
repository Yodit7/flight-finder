import { styled } from "styled-components";
import { FaEarthAfrica, FaBars } from "react-icons/fa6"
import { LuPlaneTakeoff, LuPlaneLanding, LuCalendarDays } from "react-icons/lu"


const Container = styled.div`
    height: 10vh;   
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(5, 32, 60);

    a {
        text-decoration: none;
        color: rgb(74, 170, 158);
        padding: 0px 20px;
        display: flex;
        align-items: center;
        gap: 6px;
    }
`;

const Nav = styled.ul`
    height: auto;
    list-style: none;
    display: flex;
    align-items: center;
    
    li {
        color: white;
        cursor: pointer;
        padding: 0px 20px;
    }

    li:hover {
        color: white;
    }

    .icon {
        margin-top: 5px;
    }
`;

const Header = () => {

    return (
        <>
            <Container>
                <a href="">Flight<LuPlaneTakeoff />Finder</a>
                <Nav>
                    <li>Search</li>
                    <li>Log In</li>
                    <li><FaEarthAfrica className="icon"/></li>
                    <li><FaBars className="icon"/></li>
                </Nav>
            </Container>
        </>
    )
}

export default Header;