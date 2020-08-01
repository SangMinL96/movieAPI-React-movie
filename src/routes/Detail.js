import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

// import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #feac5e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const MovieContent = styled.div`
  line-height: 1.5;
  width: 50%;
  color: white;
  .title {
    font-size: 3.5rem;
    font-weight: bold;
  }
  .languageRating {
    font-size: 1.7rem;
    font-weight: bold;
  }
  .content {
    font-size: 1.3rem;
    width: 80%;
  }
`;

const MovieImge = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  width: 25%;
  height: 60%;
`;
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`;

export default () => {
  let { id } = useParams();

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  return (
    <Container>
      <MovieContent>
        <h4 className="title">{loading ? "Loading..." : data.movie.title}</h4>
        <div className="languageRating">
          {!loading && data.movie.language} {!loading && data.movie.rating}
        </div>
        <div className="content">
          {!loading && data.movie.description_intro}
        </div>
      </MovieContent>
      <MovieImge bg={!loading && data.movie.medium_cover_image} />
    </Container>
  );
};
