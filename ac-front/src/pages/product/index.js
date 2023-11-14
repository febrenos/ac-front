import React from 'react'
import { Footer, Header, Text } from '../../components/index'
import { PageContent, Img } from '../../style'
import { Produtos, ProdutosDescricao } from '../../assets/imgs'

export function Product() {
    return(
        <>
            <Header/>
            <PageContent>
                <Text text="Produtos" title/>
                <Img src={ Produtos } width={800}/>

                <Text text="Produtos" title/>
                <Img src={ ProdutosDescricao } width={800}/>
            </PageContent>
            <Footer/>
        </>
    )
}