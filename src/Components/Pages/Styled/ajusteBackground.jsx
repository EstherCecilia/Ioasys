import styled from 'styled-components';
import backgroundImage from "../../../images/background.jpeg";

export const StyledMainDiv = styled.div`
  /* width: 320px; */
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover; */
  border-radius: 2px;
  padding-top: 30px;
  z-index: -1;

  form {
    margin-left: auto;
    margin-right: auto;
  }

  button[type="submit"] {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: ${({ theme }) => theme.primaryRed};
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryDark};
    cursor: pointer;
    transition: background 0.5s;
  }


  h2 {
    font-family: 'Nunito Sans';
  }

  h1 {
    margin-top: -2vh;
      font-family: 'Nunito Sans';
      font-size: 3em;
  }
`

export const StyledOtherDiv = styled.div`
  margin-top: 5px;

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: black;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.primaryDark};
  }

  label {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    display: block;
    font-family: 'Nunito Sans';
  }
`