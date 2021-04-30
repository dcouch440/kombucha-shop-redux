import styled from 'styled-components';

export const LinkHub = styled.div`
  z-index: 99999;
  position: fixed;
  box-shadow: 0px 0px 2px black;
  right: 2%;
  top: 2%;
  display: flex;
  font-family: monospace;
  & > a {
    color: white;
    text-decoration: none;
    background-color: white;
    color: black;
    padding: 0 10px;
    margin: 0 3px;
  }
`;
