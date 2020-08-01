import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";
const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
      rating
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Movies = styled.div`
  display: grid;
  width: 50%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  align-items: center;
  position: relative;
  top: -50px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  line-height: 1.5;
  background-color: red;
  width: 100%;
  height: 43vh;
  h3 {
    font-size: 3rem;
    color: white;
    font-weight: bold;
  }
  .content {
    font-size: 2rem;
    color: white;
  }
`;

function Home() {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <>
      <Container>
        <Header>
          <h3>상민이의 무비스타</h3>
          <div className="content">React,Apollo,GraphQL</div>
        </Header>
        {loading && <div>Loading....</div>}
        <Movies>
          {!loading &&
            data.movies &&
            data.movies.map((m) => (
              <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
            ))}
        </Movies>
      </Container>
    </>
  );
}
export default Home;
