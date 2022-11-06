import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }

      &.active {
        color: ${(props) => props.theme["green-500"]};
      }
    }
  }
`;

// border-top: 3px solid transparent;
// border-bottom: 3px solid transparent;
// para não deslocar o ícone ao colocar uma margin-bottom no hover.
// ~
// &.active {
//   color: ${(props) => props.theme["green-500"]};
// }
// o ReactJS usa uma classe "active" para setar a rota, podemos pegar ela para fazer uma estilização.
