import React from 'react'
import { AccessCard } from '../../components/index'
import { InlineLogo } from '../../assets/imgs'
import * as Styles from './style'

export function Access() {
    return(
        <Styles.PageContent>
            <Styles.Left>
                <Styles.BgImage alt="Background Logo"/>
            </Styles.Left>      
            <Styles.Right>
                <Styles.ImgLogoInline src={InlineLogo}/>
                <Styles.Center>
                    <AccessCard/>
                </Styles.Center>
            </Styles.Right>
        </Styles.PageContent>
    )
}