import { styled } from "styled-components"

const Container = styled.div`
    background-color: white;
    margin-top: 100px;
    height: auto;
    padding-bottom: 50px;
    border-radius: 10px;
`;

const Headline = styled.div`
    background-color: white;
    margin: 50px 25px;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h4 {
        font-size: 20px;
    }

    p {
        font-size: 16px;
    }
`;

const Places = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0px 20px;
    gap: 25px;
`;

const Place = styled.div`
    display: flex;
    gap: 25px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px 1px grey;
`;

const Image = styled.div`
    height: auto;
    width: 90px;
    background-color: black;
    border-radius: 15px;
`;

const Overview = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 0px;
    gap: 10px;
`;

const Title = styled.p`
    font-weight: 400;
`;

const Links = styled.ul`
    list-style: none;
    display: flex;
    gap: 15px;
    font-size: 16px;

    li:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`;


const Link = styled.li`
    color: rgb(74, 170, 158);
    cursor: pointer;
`;

const Feed = () => {
    return (
        <Container>
            <Headline>
                <h4>Popular right now</h4>
                <p>Other travellers are loving these destinations. 
                Search flights, hotels, and car hire and join them on  the adventure.</p>
            </Headline>
            <Places>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
                <Place>
                    <Image></Image>
                    <Overview>
                        <Title>Palma - Majorca</Title>
                        <Links>
                            <Link>Flights</Link>
                            <Link>Hotels</Link>
                            <Link>Car hire</Link>
                        </Links>
                    </Overview>
                </Place>
            </Places>
        </Container>
    )
}

export default Feed;