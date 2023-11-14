import React from "react";
import { InlineLogo } from '../../assets/imgs';
import {Carrosel} from '../../assets/imgs/index.js'
import * as Styled from './style.js';
import {Img} from '../../style.js'

export function Header() {

  return (
    <Styled.Header id="header">
      <Styled.HeaderNav>
        <Styled.ImgLogoInline src={InlineLogo}/>
        <Styled.Ul>
          <Styled.NavLinkItem to="/about-us">Sobre nós</Styled.NavLinkItem>
          <Styled.NavLinkItem to="/services">Serviços</Styled.NavLinkItem>
          <Styled.NavLinkItem to="/product">Produto</Styled.NavLinkItem>
          <Styled.A href="#footer">Contato</Styled.A>
        </Styled.Ul>
      </Styled.HeaderNav>
      <Img src={ Carrosel }/>
    </Styled.Header>
  )
}
