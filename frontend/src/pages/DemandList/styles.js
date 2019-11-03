import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  a#new {
    position: fixed;
    right: 20px;
    bottom: 30px;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:10px;
    margin: 5px 0 0;
        height: 50px;
        width: 50px;
        border: 0;
         border-radius: 50%;
        background: #fff;
        font-weight: bold;
        color:  #3b9eff;
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

    span{
        text-align: center;
    }

    strong{
margin-top: 10px;

  }

 ul {
   list-style: none;

   li{
     font-weight: bold;
     padding: 5px 10px;
   small{
     font-weight: normal;
     color: #999;
     font-style: italic;
   }
   &:nth-child( 2n - 1 ){
     background: #f5f5f5;
   }
   }
 }


    p{
    color: #999;
    word-wrap: break-word;
}

}



a {

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
 a.destroy{
  cursor: pointer;
  color:red;
  border: 2px solid red;
  :hover{
    background-color: red;
    color: #fff;
  }

}

`;
