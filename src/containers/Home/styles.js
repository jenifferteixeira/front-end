import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #060301;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    margin-top: 0px;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 36px;

`

export const H1 = styled.h1`
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin-bottom:15px;
`

export const InputLabel = styled.p`
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.41px;
    color: #EEEEEE;
    margin-top: 15px;
    padding-left: 15px;
`

export const Input = styled.input`
    width: 375px;
    height: 55px;
    gap: 18px;
    background-color:rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    border: none;
    outline: none;

    font-size: 18px;
    line-height: 21px;
    color: rgba(255, 255, 255, 1);
    padding-left: 15px;
`

export const Button = styled.button`
    width: 375px;
    height: 68px;
    background-color: purple;
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
    color: lime;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    &:active{
        background-color: green;
        color: #eba4eb;
   }
`
