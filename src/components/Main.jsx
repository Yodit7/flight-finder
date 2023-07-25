import { styled } from "styled-components";
import SearchBox from "./SearchBox";
// import Feed from "./Feed";
import Footer from "./Footer";
import SearchResult from "./SearchResult";

const Container = styled.div`
    height: 100%;
    padding-top: 50px;
    background-color: rgb(5, 32, 60);
`;


const Main = () => {
    return (
        <>
            <Container>
                <SearchBox />
            </Container>
            <Footer />
        </>
    )
}

export default Main;