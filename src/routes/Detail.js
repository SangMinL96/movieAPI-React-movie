import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// import { styled } from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  const { id } = useParams();
  console.log(id);

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  console.log(loading, { data });
  return "HOME";
};
