import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  align-items: center;

  div{
    max-width: 100%;
    margin: 20px auto 0;
    padding: 0 20px;

    article {
    background-color: #fff;
    border-radius: 5px;
    
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;

 
}


article p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
    max-width: 90%;
}
article a {
    height: 42px;
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
}
article a:hover {
    background-color: #008080;
    color: #fff;
}


  }
`;