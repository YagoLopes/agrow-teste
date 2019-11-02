import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  align-items: center;

  div{

    max-width: 90%;
    margin: 20px auto;
    padding: 0 20px;
    display:flex;
    flex-flow: row wrap;


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


  }
`;