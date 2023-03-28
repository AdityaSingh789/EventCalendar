import styled from 'styled-components';

export const Wrapper =styled.div`
       width: 70%;
       height:90vh;
       border:2px solid;
       margin: 50px 50px 50px 200px;
    
`;

export const CalendarHead = styled.div`
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 24px;
`;


export const SevenGrid = styled.div`
      width: 100%;
      display:grid;
      grid-template-columns:repeat(7,1fr);
      height:30px;
`;

export const HeadDay = styled.span`
       text-align:center;
       background:#89C4E1;
       font-size:1.2rem;
`;

export const CalendarBody=styled.div`
       
       height:calc(100% - 27px - 40px);
       height:180px;
       display:grid;
       grid-template-columns:repeat(7,1fr);
       grid-template-rows:repeat(${({fourCol}) => fourCol ? 4 : 5},1fr);
`;

export const StyledDay = styled.span`
    border:1px solid;
    text-align:right;
    padding:5px;
    ${({active})=> active && `background:#B5D5C5`};
`;

export const StyledEvent = styled.span`
       display: grid;
       text-align: center;
       background:darkblue;
       color:white;
       padding:4px 18px;
       border-radius: 10px;
`