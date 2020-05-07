import React from 'react';
import styled from 'styled-components';
import barber from './assets/barber_login.jpg';


export const ImageLeft = styled.div`
  width: 75%;
  height: 100vh;
  background: url(${barber});
  background-size: contain;
  background-position: left;
  background-attachment: fixed;
  float: left;
`;

export const Login = styled.div`
  width: 24%;
  float: left;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .logoform {
    text-align: center;
    align-content: center;
    h1 {
      font-family: 'Pacifico', cursive;
      transform: rotate(-10deg);
      text-decoration: underline;
      font-size: 50px;
      text-align: center;
    }
    h2 {
      font-family: 'Lato', black;
      text-align: center;
    }
    form {
      width: 90%;
      text-align: center;
      margin: auto;
      display: table;
      input {
        width: 100%;
        margin-top: 30px;
        height: 30px;
        font-size: 20px;
        border: none;
        border-bottom: 1px solid grey;
        :focus {
          border: none;
          outline: none;
          border-bottom: 1px solid green;
        }
      }
      button {
        margin-top: 30px;
        color: white;
        background-color: green;
        width: 50%;
        height: 40px;
        font-size: 1.3em;
        border-radius: 20px;
        transition: padding-right 1s, border-radius 2s;
        :hover {
          padding-right: 10px;
          border-radius: 100%;
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
const color = ({ currentColor }) => currentColor;

export const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  font-family: 'Lato', black;
  .image-place {
    align-items: center;
    background-color: ${color};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-sizing: border-box;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    img {
      height: 100%;
    }
  }
  .barber-name {
    text-align: center;
    p {
      color: black;
      border-bottom: 1px dotted gray;
      width: 50%;
      margin: 0 auto;
      font-weight: 700;
    }
  }
  svg {
    margin-left: 5px;
    cursor: pointer;
  }

  .details {
    color: gray;
    font-weight: 500;
  }

  .social {
    color: gray;
  }
`;
export const Title = styled.div`
  font-family: 'Lato', black;
  text-align: center;

  h3 {
    font-weight: 900;
  }
  p {
    color: gray;
  }
`;

const barberphto = ({ currentphoto }) => currentphoto;
export const Overlay = styled.div`
  min-width: 100%;
  height: 100vh;
  background-color: ${color};
  opacity: 0.7;
  margin-left: -10px;
  z-index: 2;

  form {
    text-align: center;
  }
`;

export const BarberPic = styled.div`
  background-image: url(${barberphto});
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  z-index: 1;
  background-position: left bottom;
`;

export const TitleBarber = styled.div`
  font-family: 'Lato', black;
  text-align: center;
  color: white;
  margin: 0 25%;
  justify-content: center;
  align-content: center;
  align-items: center;
  h3 {
    font-weight: 900;
    border-bottom: 1px solid white;
    width: 300px;
  }
  p {
    color: gray;
    width: 300px;
  }

  button {
    background-color: white;
    color: black;
    border-radius: 50% 50% 50% 50%;
    height: 50px;
    width: 120px;
  }
`;


export const Brand = styled.h1`
  font-family: 'Pacifico', cursive;
  transform: rotate(-10deg);
  text-decoration: underline;
  font-size: 30px;
  text-align: center;
  color: black;
  margin-top: 30px;
  margin-bottom: 60px;
`;

export const SingleLink = styled.a`
  margin-left: 10px;
  font-family: 'Lato', black;
  font-weight: 600;
  text-align: left;
  color: black;
  cursor: pointer;
`;
export const Button = styled.button`
  margin-left: 10px;
  font-family: 'Lato', black;
  font-weight: 600;
  text-align: left;
  color: black;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
`;
export const Social = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: black;
  margin-bottom: 30px;
  text-align: center;
  margin-left: 10px;
  svg {
    margin-left: 10px;
  }
`;
export const CopyWright = styled.div`
  p {
    font-size: 11px;
  }
`;
