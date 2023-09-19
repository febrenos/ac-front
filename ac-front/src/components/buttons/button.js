import React, {useState} from 'react'
import * as Styles from './style'

export default function Button({name}) {
    return(
            <Styles.Button>
                {name}
            </Styles.Button>
    )
}