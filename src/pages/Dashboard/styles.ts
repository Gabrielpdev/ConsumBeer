import styled from 'styled-components';
import { Map as Mapa, Popup as texto } from 'react-leaflet';

export const Container = styled.div`
  width: 100%;

  h1 {
    display: flex;
    justify-content: center;

    font-size: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 80%;
  margin: 0 auto;

  button {
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    background: #ff9900;
  }

  div.profile {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    text-align: right;
  }
`;

export const Map = styled(Mapa)`
  margin: 80px auto;
  border-radius: 10px;
  height: 500px;
  width: 80%;
  border: 2px solid #000;

  &:hover {
    border: 2px solid #ff9000;
  }
`;

export const Popup = styled(texto)`
  display: flex;
  flex-direction: column;

  div.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    button {
      border: none;
      background: none;
      &:hover {
        color: #ff9000;
      }
    }
  }

  img {
    margin-left: 8px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;
