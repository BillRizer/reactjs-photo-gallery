import styled from "styled-components";

export const PageStyled = styled.div`
  &.full {
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 91vh;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const Tools = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px 30px;
`;

export const Notifications = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px 30px;
`;
export const Notification = styled.div`
  max-width: 50%;
  padding: 20px 40px 20px 20px;
  background: #f1f1f1;
  border-left: 10px solid ${(props) => props.theme.colors.attention};
  background-color: ${(props) => props.theme.colors.attention_light};
  color: ${(props) => props.theme.colors.title} ;
`;
