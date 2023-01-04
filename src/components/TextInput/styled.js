import styled from "styled-components";

const Container = styled.div`
  border: 1px solid rgba(25, 4, 69, 0.1);
  width: 255px;
  height: 42px;
  display: flex;
  margin-bottom: 20px;

  span {
    height: 42px;
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
  }
  input {
    width: calc(100% - 42px);
    border: none;
    outline: none;
  }
`;

export { Container };
