import styled, { keyframes, css } from 'styled-components';
import { FiStar } from 'react-icons/fi';
import { lighten } from 'polished';

import signInBackgroundImg from '../../assets/commerce.jpg';

interface IFavorite {
  Favorite: boolean;
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 900px;
`;

export const Icons = styled.div`
  width: 70%;
  position: relative;
  top: 30px;

  display: flex;
  justify-content: space-between;

  > svg {
    cursor: pointer;

    &:hover {
      color: #ff9900;
    }
  }
`;

export const Star = styled(FiStar)<IFavorite>`
  ${props =>
    props.Favorite &&
    css`
      color: #ff9900;
    `}
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const ProductList = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  border-spacing: 0px 10px;
  animation: ${appearFromLeft} 1s;
  > thead th {
    color: #ff9900;

    font-size: 18px;
    font-weight: 500;
    text-align: center;
    padding: 25px 0 0 0;
  }
  > tbody {
    tr {
      margin: 0;
      padding-top: 0;
      text-align: center;

      td {
        padding: 5px 15px;
        color: #fff;
        font-size: 15px;
        height: 35px;

        &:first-of-type {
          border-radius: 4px 0 0 4px;
        }

        &:last-of-type {
          border-radius: 0 4px 4px 0;
        }

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 5px;
        }

        div.produto {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export const AnimationContainer = styled.div`
  width: 90%;
  height: 100%;
  max-height: 820px;

  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 100px;
    height: 100px;
    border: 1px solid #ff9900;
    border-radius: 50%;
  }

  div.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    animation: ${appearFromLeft} 1s;
    h1 {
      color: #f4ede8;

      margin: 0 auto;
      margin-top: 25px;

      font-size: 14px;
      font-weight: 600;
      display: block;

      cursor: pointer;

      &:hover {
        color: #ff9900;
      }
    }
  }

  div.bio {
    width: 80%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    animation: ${appearFromLeft} 1s;
    h2 {
      color: #ff9900;
    }

    span {
      margin-top: 10px;
    }
  }

  div.drivethru {
    width: 80%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    animation: ${appearFromLeft} 1s;
    h2 {
      color: #ff9900;
    }

    button.ocupado {
      margin-top: 10px;
      border: 1px solid #312e38;
      padding: 5px;
      border-radius: 5px;

      cursor: no-drop;
    }

    button.disponivel {
      margin-top: 10px;
      border: 1px solid #312e38;
      padding: 5px;
      border-radius: 5px;
      background: ${lighten(0.39, '#ff9900')};

      &:hover {
        border: 1px solid #ff9900;
      }
    }

    div.teste {
      width: 1000px;
      background: #000;
    }
  }

  div.confirmar {
    margin-top: 10px;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 25px;
    }

    button {
      border: 1px solid #312e38;

      border-radius: 5px;

      background: #f4ede8;
      padding: 0 5px;

      &:hover {
        background: ${lighten(0.4, '#ff9900')};
        border: 1px solid #ff9900;
      }
    }
  }

  button.cupomButton {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 5px 0;

    border: 1px solid #312e38;

    border-radius: 5px;

    background: #f4ede8;
    padding: 5px;

    > img {
      margin-left: 10px;
      width: 50px;
      height: 50px;
    }
    span {
      margin: auto;
    }

    &:hover {
      background: ${lighten(0.4, '#ff9900')};
      border: 1px solid #ff9900;
    }
  }

  svg {
    cursor: pointer;

    &:hover {
      color: #ff9900;
    }
  }
  div.cupom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      margin: 20px 0;
    }

    h3 {
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
