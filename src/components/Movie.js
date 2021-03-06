import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
const Items = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
`;
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
  background-size: cover;
  &:hover {
    transform: scale(1.03);
    opacity: 90%;
  }
`;
const LikeBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 20px;
  outline: none;
  border: 1px solid aqua;
  background-color: aqua;
  color: black;

  width: 50px;
  height: 30px;
`;

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;
export default ({ id, isLiked, bg }) => {
  const [toggleMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });
  return (
    <Items>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <LikeBtn onClick={toggleMovie}>{isLiked ? "Unlike" : "Like"}</LikeBtn>
    </Items>
  );
};
