import React, {useState} from 'react'
import * as Styles from './style'
import Button from '../../buttons/button'
import Input from '../../inputs'

// import {Card, ButtonCard} from './style'

export default function AccessCard() {
    const [isRegister,setIsRegister] = useState(false)
    const loginOn = () => {
        setIsRegister(false);
    };
    const loginOff = () => {
        setIsRegister(true);
    };

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
                            <Button name="Login" isRegister={isRegister}/>
                        </>
                    }
                    {isRegister &&
                        <>
                            <Input name="user" type="text" placeholder="Login"/>
                            <Input name="email" type="email" placeholder="Email"/>
                            <Input name="password" type="password" placeholder="Password"/>
                            <Input name="password" type="password" placeholder="Conf. Password"/>
                            <Button name="Cadastrar" isRegister={isRegister}/>
                        </>
                    }
                    
                </Styles.Content>
            </Styles.Card>
    )
}