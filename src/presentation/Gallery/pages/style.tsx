import styled from "styled-components";

export const PageStyled = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  &.full {
    flex: 1;
    height: 91vh;
  }
`;
export const Tools = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 0 27px;
  box-sizing: border-box;
`;

export const Notifications = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
  width: 100%;
`;
export const Notification = styled.div`
  max-width: 50%;
  padding: 20px 40px 20px 20px;
  background: #f1f1f1;
  border-left: 10px solid ${(props) => props.theme.colors.attention};
  background-color: ${(props) => props.theme.colors.attention_light};
  color: ${(props) => props.theme.colors.title};
`;

export const PexelApiKey = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  width: 350px;
  border-radius: 8px;
  background: #049377;
  color: #fff;
  font-weight: bold;
  & input {
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #000;
    border: none;
    width: 100%;
    padding: 0 7px;
    max-width: 200px;
    height: 18px;
  }
`;
