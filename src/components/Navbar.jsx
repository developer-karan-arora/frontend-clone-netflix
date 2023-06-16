import React from "react";
import styled from "styled-components";
function Navbar() {
  return (
    <Containner>
      <img src="/netflix-logo.png" alt="" />
    </Containner>
  );
}
let Containner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
  img{
    height: 100px;
  }
`;
export default Navbar;
