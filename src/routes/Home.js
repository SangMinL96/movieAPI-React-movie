import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      rating
    }
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  line-height: 1.5;
  background-color: red;
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
// const MovieContainer = styled.div`

// `;
function Home() {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <>
      <HeaderContainer>
        <h3>상민이의 무비스타</h3>
        <div className="content">React,Apollo,GraphQL</div>
      </HeaderContainer>
      {loading && <div>Loading....</div>}
      {!loading &&
        data.movies &&
        data.movies.map((m) => <Movie key={m.id} id={m.id} />)}
    </>
  );
}
export default Home;
