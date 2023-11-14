import React, {useState} from 'react'
import {Button, Input} from '../../index'
import {useNavigate } from 'react-router-dom';
import * as Styles from './style'

function test() {
  return () => {
    setTimeout(() => {
      console.log("Test loading");
    }, 3000);
  };
}

export function AccessCard() {
    const [isRegister,setIsRegister] = useState(false)
    const navigate = useNavigate()
    const loginOn = () => {
        setIsRegister(false);
    };
    const loginOff = () => {
        setIsRegister(true);
    };
    const login = () =>{
        navigate('/about-us')
    }

    return(
            <Styles.Card>
                <Styles.ContentButtonCard>
                    <Styles.UnderButtonCard/>
                    <Styles.ButtonCardLogin isRegister={!isRegister} onClick={loginOn}>Login</Styles.ButtonCardLogin>
                    <Styles.ButtonCardRegister isRegister={isRegister} onClick={loginOff}>Cadastro</Styles.ButtonCardRegister>
                </Styles.ContentButtonCard>
                <Styles.Content>
                    <Styles.UserIcon/>
                    {!isRegister &&
                        <>
                            <Input name="user" type="text" placeholder="Login"/>
                            <Input name="password" type="password" placeholder="Password"/>
                            <Button text="Login" onClick={login}/>
                        </>
                    }
                    {isRegister &&
                        <>
                            <Input name="user" type="text" placeholder="Login"/>
                            <Input name="email" type="email" placeholder="Email"/>
                            <Input name="password" type="password" placeholder="Password"/>
                            <Input name="password" type="password" placeholder="Conf. Password"/>
                            <Button text="Cadastrar" onClick={test()} />
                        </>
                    }
                    
                </Styles.Content>
            </Styles.Card>
    )
}