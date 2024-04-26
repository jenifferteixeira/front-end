import { styled } from "styled-components";


export const Container = styled.div`
    background-color: #060301;
    height: 100%;
    min-height: 100vh;
    
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    width: 455px;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 36px;
    align-items: center;
`

export const H1 = styled.h1`
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin-bottom:35px;
`

export const Button = styled.button`
    width: 375px;
    height: 68px;
    background-color: green;
    border: none;
    border-radius:10px;
    margin-top: 60px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    line-height: 2.5px;
    text-align: center;
    color: purple;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    &:active{
        background-color: purple;
        color: lime;
   }
`
export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 375px;
    height: 100px;
    gap: 10px;
    background-color:rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-top: 18px;

    border: none;
    outline: none;

    button {
    font-size: 35px;
    background-color: transparent;
    color: white;
    border: none;   
    cursor: pointer;
    } 
`

export const Trash = styled.button` 
    background-color: transparent;
    width: 20px;

    cursor: pointer;
    border: none;
    outline: none;

`