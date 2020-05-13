import React from "react"
import styled from "styled-components"

const Container = styled.div`
    border: solid orangered 2.5px;
    background: orange;
    display: flex;
    flex-flow: column wrap;
    max-width: 40%;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 0 auto;`;

const FollowersTitle = styled.h2`
    text-align: center;`;

const Img = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;`;

const UserCard = (props) => {
    console.log(props)
    return (
        <>
            <Container key={props.users.id}>
                <h3>{props.users.name}</h3>
                <p>{props.users.bio}</p>
                <p>Location: {props.users.location}</p>
                <p>Website: {props.users.blog}</p>
                <Img src = {props.users.avatar_url}  />
            </Container>
            <div>
                <FollowersTitle>Followers</FollowersTitle>
            </div>
            <div className='followers'>
            {props.followers.map(follower => (
                <div key={follower.id} className='follower'>
                    <div> 
                    <h3>{follower.login}</h3>
                    <p>{follower.url}</p>
                    <p>{follower.gravatar_id}</p>
                    <img src = {follower.avatar_url} className='img' />
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}
export default UserCard; 