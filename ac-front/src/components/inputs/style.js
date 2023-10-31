import styled from 'styled-components'
import {ReactComponent as User} from '../../../src/assets/icons/user.svg'
import {ReactComponent as Email} from '../../../src/assets/icons/email.svg'
import {ReactComponent as Lock} from '../../../src/assets/icons/lock.svg'
import {ReactComponent as LockOpen} from '../../../src/assets/icons/lockOpen.svg'

export const Input = styled.input`
background-color: var(--bg-secondary-color);
border:2px solid var(--bg-secondary-color);
padding: 7px 40px;
text-align:center;
color: var(--text-color);
border-radius:10px;
font-size:15px;

&::placeholder{
    color:var(--text-color);
}

&:focus{
    border:2px solid var(--text-secundary-color);
}

&:focus, 
&:valid {
    outline: none;
}
`

export const UserIcon = styled(User)`
    margin-left:10px;
    position: absolute;
`

export const EmailIcon = styled(Email)`
    margin-left:10px;
    position: absolute;
`

export const LockIcon = styled(Lock)`
    margin-left:10px;
    position: absolute;
    cursor: pointer;
`
export const LockOpenIcon = styled(LockOpen)`
    margin-left:10px;
    position: absolute;
    cursor: pointer;
    rotate:20deg;
`

export const Content = styled.div`
    display:flex;
    align-items: center;
`