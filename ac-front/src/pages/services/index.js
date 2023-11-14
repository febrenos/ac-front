import React from 'react'
import { Footer, Header, Text } from '../../components/index'
import {PageContent, Img} from '../../style'
import {DefaultImg, FluxoSimplificado, SDescricao, SDistribuicao, SImportacaoDireta, SImportacaoTrading, SPesquisaDesenvolvimento, Vantagens} from '../../assets/imgs/index'

export function Services() {
    return(
        <div>
            <Header/>
                <PageContent>
                    <Text text="Pesquisa e Desenvolvimento" title/>
                    <Img src={SPesquisaDesenvolvimento} width={500}/>

                    <Text text="importações" title/>
                    <Text text="Fornecemos a melhor solução para entrega de mercadorias no desembaraço aduaneiro no Brasil do fornecedor internacional para sua empresa ou fornecer diretamente de nossos parceiros de distribuição"/>
                    <Img src={SImportacaoDireta} width={700}/>
                    <Img src={SImportacaoTrading} width={700}/>
                    <Img src={SDistribuicao} width={700}/>
                    <Img src={SDescricao} width={700}/>

                    <Text text="Parceiros de Negócio" title/>
                    <Text text="Conectar clientes aos produtos químicos e serviços de importação, dentro de uma solução completa no fornecimento de produtos, tornando viável os processos empresariais ao longo de toda cadeia de suprimentos, contribuindo com o crescimento do mercado, o meio ambiente, saúde e bem-estar de toda a sociedade."/>
                    <Img src={FluxoSimplificado} width={700}/>

                    <Text text="Vantagens" title/>
                    <Img src={Vantagens} width={700}/>

                    <Text text="Distribuidores Locais" title/>
                    <Text text="A Ativa Chemical mantem uma parceria estratégica com alguns distribuidores locais para que nossos clientes encontre 100% de sua demanda através da Ativa Chemical. Maior comodidade para os nossos clientes, sem perder a confiabilidade na qualidade de nossos produtos e rede de abastecimento."/>

                    <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", justifyContent:"center"}}>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                    </div>
                </PageContent>
            <Footer/>
        </div>
    )
}