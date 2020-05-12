import React from "react"
import styled from "styled-components"

const Container = styled.div`
    border: dashed black 2.5px;
    background: #00ffdd;
    display: flex;
    flex-direction: column;
    max-width: 45%;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 0 auto;`;

const FollowersTitle = styled.h2`
    text-align: center;`;

const Img = styled.img`
    max-width: 40%`;
const UserCard = (props) => {
    console.log(props)
    return (
        <>
            <Container key={props.users.id}>
                <h3>{props.users.name}</h3>
                <p>{props.users.bio}</p>
                <p>Location: {props.users.location}</p>
                <Img src = {props.users.avatar_url} />
            </Container>
            <div>
                <FollowersTitle>Followers</FollowersTitle>
            </div>
            {props.followers.map(follower => (
                <Container key={follower.id}>
                    <div> 
                    <h3>{follower.login}</h3>
                    <p>{follower.url}</p>
                    <p>{follower.gravatar_id}</p>
                    <img src = {follower.avatar_url} />
                    </div>
                </Container>
            ))}
        </>
    )
}
export default UserCard; 