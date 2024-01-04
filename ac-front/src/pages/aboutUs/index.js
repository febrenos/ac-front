import React from 'react'
import { Footer, Header, Text } from '../../components/index'
import { PageContent, Img } from '../../style'
import { SegmentosAtuacao } from '../../assets/imgs'

export function AboutUs() {
    return(
        <>
            <Header/>
                <PageContent>
                    <Text text="Quem somos" title/>
                    <Text space={10} text={[
                        "A Ativa Chemical e sua diretoria, com vários anos de experiência no mercado nacional e internacional, inicialmente focada em pesquisa e desenvolvimento de novos produtos e fornecedores internacionais. Agora também inclui importação e distribuição local como serviço.",
                        "Na divisão de produtos químicos, movida por grandes desafios, simplificação de processos, gestão de riscos, solução financeira (prazo de pagamento de até 360 dias) e entrega de resultados consistentes. Criamos uma solução para atender pequenos, médios e grandes compradores brasileiros, dentro de um modelo de sucesso com Trading Companies e Distribuição Nacional.",
                        "Entregamos uma solução completa, estruturada com robusta capacidade operacional e financeira e toda a força comercial e know-how da Ativa Chemical.",
                    ]} />

                    <Text text="Segmentos de Atuação" title/>
                    <Img src={ SegmentosAtuacao } width={800}/>

                    <Text text="Nossos Pilares" title/>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
                        <Text bold text={"Missão"}/>
                        <Text text={"Conectar clientes aos produtos químicos e serviços de importação, dentro de uma solução completa no fornecimento de produtos, tornando viável os processos empresariais ao longo de toda cadeia de suprimentos, contribuindo com o crescimento do mercado, o meio ambiente, saúde e bem-estar de toda a sociedade."}/>

                        <Text bold text={"Visão"}/>
                        <Text text={"Ser uma empresa de referência no mercado que entrega uma solução completa no fornecimento de produtos químicos para pequenas medias e grandes empresas de forma regionalizada."}/>
                        
                        <Text bold text={"Valores"}/>
                        <Text text={"Acreditamos na importância das relações interpessoais respeitosa e colaborativa, como o pilar principal para o desenvolvimento de um ambiente saudável e duradouro. Ter um compromisso com a verdade é o melhor caminho para cultivar a qualidade dessas relações. Quanto maior a diversidade de um grupo, maior será sua sabedoria, vitalidade e riqueza."}/>
                    </div>

                </PageContent>
            <Footer/>
        </>
    )
}