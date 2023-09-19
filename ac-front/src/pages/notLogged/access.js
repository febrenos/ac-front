import React from 'react'
import AccessCard from '../../components/cards/accessCard'
import * as Styles from './style'

export default function Access() {
    return(
        <Styles.PageContent>
            <Styles.Left>
                <Styles.BgImage alt="Background Logo"/>
            </Styles.Left>
            <Styles.Right>
                <AccessCard/>
            </Styles.Right>
        </Styles.PageContent>
    )
}