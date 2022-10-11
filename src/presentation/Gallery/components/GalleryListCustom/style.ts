import styled from "styled-components";

export const Photo = styled.img`
  max-height: 200px;
`;
export const PhotoBox = styled.div`
  padding: 10px;
  background: #f1f1f1;
  box-shadow: 1px 2px 5px 0px #ccc;
  margin: 10px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const PhotoMask = styled.div`
  max-height: 200px;
  max-width: 300px;
  overflow: hidden;
  border-radius: 3px;
`;
export const PhotoDesc = styled.div``;
export const Photos = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
