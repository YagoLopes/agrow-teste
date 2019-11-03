import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  a#new {
      display:flex;
      justify-content:center;
      align-items:center;
      padding:10px;
    margin: 5px 0 0;
        height: 50px;
        width: 50px;
        border: 0;
         border-radius: 50%;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        font-size: 16px;
        transition: background 0.2s;

}


  header{
    color: #fff;
    font-weight: bold;
    font-size: 2em;
    font-family: 'Fredoka One', cursive;
    letter-spacing: 5px;
  }

  div{

    max-width: 90%;
    margin: 20px auto;
    padding: 0 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    animation: fade 1.2s;
    article {
    background-color: #fff;
    width: 200px;
    border-radius: 5px;
    display:flex;
    flex-direction:column;

    border: 1px solid #ddd;
    padding: 20px;
    margin: 20px 0 0 20px;


}


article p{
    color: #999;
    word-wrap: break-word;
}
article a {

    border-radius: 5px;
    border: 2px solid #008080;
    background-color: none;
    margin-top: 10px;
    color:#008080;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;

    :hover {
    background-color: #008080;
    color: #fff;
}
}


article a.destroy{
  cursor: pointer;
  color:red;
  border: 2px solid red;
  :hover{
    background-color: red;
    color: #fff;
  }

}

`;
