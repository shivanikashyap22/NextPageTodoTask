import styled from "styled-components";
export const Details=styled.div`
padding: 20px;
border: 0.5px solid black;
background:white;
margin:30px 0px;
    text-align: start;
    .task{
    display: flex;
    gap: 10%;
    margin:20px 0px;
}
.start{
  
    border: 0.5px solid black;
    background: none;
}
.btnTitle{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.Abask{
    display: flex;
    gap: 6.7rem;
}
.updateBtn{
    width: 28%;
    display: flex;
    gap: 10%;
}
.sign{
    width:30%;
}
.title{
    width:50%;
}
`
export const TodoDataDetails=styled.div`
padding-bottom:30px;
.break{
    display:flex;
    justify-content:right;
    margin-bottom:10px;
}
.heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:20px;
}
.dropBtn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:20px; 
}
.hey{
    border: 0.5px solid black;
    padding: 9px;
    background:white;
    
}
.btn-secondary {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:black;
    background-color:white;
}
.btn-secondary:hover {

    color:black;
    background-color:white;
}
.timer{
    font-size: 20px;
    border: 0.5px solid black;
    background: white;
}

`


export const TableData=styled.div`
background:#f0f2f5;

`