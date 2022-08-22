import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
// import Header from ".components/Header"

function Login() {
    return (
        <div className="App">
        <StContainer>
          <StWhole>
                <StIntro>
                  <div>
                    <h1 style={{fontSize:'48px', color:'#1877F2', textAlign: 'left', marginBottom: '10px'}}>facebook</h1>
                    <h4 style={{fontSize:'30px', marginTop: '0px', textAlign: 'left'}}>Facebook에서 전세계에 있는 친구, 
                    가족, 지인들과 함께 이야기를 나눠보세요.</h4>
                  </div>
                </StIntro>
    
              <StLogin>
                <StForm>
                <form>
                      <input type="email" placeholder='e-mail' 
                      style={{margin: '10px 0px 0px 0px', padding: '14px 30px 14px 30px', fontSize:'17px', borderRadius:'6px', border: '1px solid #E5E6E8'}}></input>
                      <input type="password" placeholder='password'
                      style={{margin: '10px 0px 5px 0px', padding: '14px 30px 14px 30px', fontSize:'17px', borderRadius:'6px', border: '1px solid #E5E6E8'}}></input>
                    <StBtn style={{color: 'white', backgroundColor: '#1877F2'}}>Login </StBtn>  
                    <StBtn style={{backgroundColor: '#DFE31C'}}>KaKaoTalk Login </StBtn>
                </form>
                </StForm>
    
                  <div className='signup'>
                    <div style={{padding: '10px'}}></div>
                    <StBtn style={{color:'white', backgroundColor: '#49C530', margin:'10px 50px'}}>New Account</StBtn>
                  </div>
              </StLogin>
            </StWhole>
          </StContainer>
        </div>
      );
    }
    
    export default Login;
    
    const StContainer= styled.div`
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        outline: none;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #F1F2F5;
        background-size: cover;
    `
    
    const StWhole= styled.div`
        max-width: 1000px;
        margin: auto;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    
    const StIntro= styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 40px;
    `
    
    const StLogin= styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        padding: 30px 30px 50px;
        text-align: center;
        background-color: white;
        border-radius: 9px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0,0,0,.1);
    `
    const StForm= styled.div`
        display: flex;
        flex-direction: column;
    `

    const StBtn= styled.div` //styled.button으로 해야해서 수정필요
        padding: 10px;
        margin: 10px 15px 10px 15px;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
    `

