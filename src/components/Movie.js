import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Items = styled.div`
  width: 100%;
  height: 420px;
`;
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
  background-size: cover;
`;
export default ({ id, title, bg }) => (
  <Items>
    <Link to={`/${id}`}>
      <Poster bg={bg} />
    </Link>
  </Items>
);
