import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 400px;
    height: 400px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 20px;
    img {
      max-width: 50%;
    }
    form {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #006c96;
        margin: 0 0 10px;
        &::placeholder {
          color: rgba(0, 108, 150, 0.5);
        }
      }
      span {
        color: #cc6666;
        align-self: flex-start;
        margin: 0 0 10px;
        text-shadow: 1px 1px #333;
      }
      button {
        margin: 5px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
      }
    }
  }
`;