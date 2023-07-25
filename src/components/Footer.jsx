import { styled } from "styled-components";

const Container = styled.div`
    height: 5vh;
    background-color: rgb(5, 32, 60);
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = () => {
    return (
        <>
            <Container>
                <p>Flight Finder</p>
            </Container>
        </>
    )
}

export default Footer;