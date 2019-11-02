import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  main {
      color:#fff;
      font-weight: bold;
      font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 20px;
    form {

      animation: fade 1.2s;



@keyframes fade {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}



      display: flex;
      flex-direction: column;
      margin-top: 30px;
      input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 10px;
        color: #F1F1F1;
        margin: 0 0 10px;
        &::placeholder {
          color: #F1F1F1;
        }
      }
      span {
        color: #cc6666;
        align-self: flex-start;
        margin: 0 0 10px;
        text-shadow: 1px 1px #333;
      }
      button {
        cursor: pointer;
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

      button.voltar {
        margin-top:10px;
        background: #c2c2c2;

        color: #fff;

      }
    }
  }
`;