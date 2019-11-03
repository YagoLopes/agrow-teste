import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;


ul{
  width: 100%;
  height: 90%;


:first-child{
    margin-bottom: 10px;
    font-size: 1.7em;
}


 li{

   padding: 10px;

 display: flex;
     justify-content: center;
     align-items:center;

     strong{
        font-size: 1.5em;
     }

 a{
    font-size: 1em;
   color:#3b9eff;
   :hover{
   color: #235e99;
   }
 }
 }
}



      a#sair{
          cursor: pointer;
        font-size: 2em;
    height: 10%;
     color: red;
     padding: 10px;
     display: flex;
     justify-content: center;
     align-items:center;
 }

`;


export const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '20px',
    top: '30px',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    padding: '2em 1em 0',
    fontSize: '1em',
  },
  bmMorphShape: {
    fill: '#fff',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};
