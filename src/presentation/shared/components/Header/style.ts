import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.colors.header};
  justify-content: space-between;
  padding: 0 30px;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    font-size: ${(props) => props.theme.fonts.md};
    color: ${(props) => props.theme.colors.shape_light};
    padding: 10px 40px;
    transition-duration: 0.5s;
  }
  a:hover{
    color: ${(props) => props.theme.colors.shape};
  }
`;
export const Tools = styled.div`
  display: flex;
  align-items: center;
`;