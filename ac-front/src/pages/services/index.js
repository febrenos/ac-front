import React from 'react'
import { Footer, Header, Text, TimelineCard } from '../../components/index'
import {PageContent, Img} from '../../style'
import {DefaultImg, FluxoSimplificado, SDescricao, SDistribuicao, SImportacaoDireta, SImportacaoTrading, SPesquisaDesenvolvimento, Vantagens} from '../../assets/imgs/index'

export function Services() {
    return(
        <div>
            <Header/>
                <PageContent>
                    <Text text="Pesquisa e Desenvolvimento" title/>
                    <TimelineCard steps={[
                        {"Ideação":"O processo começa com a identificação de necessidades do mercado, oportunidades de inovação ou desafios a serem resolvidos. Isso pode ser feito através de pesquisas de mercado, feedback de clientes e análise de tendências"}, 
                        {"Foco": "O processo começa com a identificação de necessidades do mercado, oportunidades de inovação ou desafios a serem resolvidos. Isso pode ser feito através de pesquisas de mercado, feedback de clientes e análise de tendências"}, 
                        {"Concepção":"Nesta fase, os cientistas e pesquisadores conduzem experimentos para desenvolver novos compostos químicos ou aprimorar os existentes. Isso envolve a síntese de moléculas, testes de laboratório e a coleta de dados para avaliar propriedades químicas, físicas e biológicas."}, 
                        {"Análise e Avaliação":"Os resultados dos experimentos são analisados e avaliados quanto à eficácia, segurança e viabilidade econômica. Os compostos químicos que atendem aos critérios estabelecidos são selecionados para avançar no processo."}, 
                        {"Teste em campo & Homologação":"Os compostos químicos promissores são produzidos em pequena escala para verificar a viabilidade da produção em larga escala. Isso também permite otimizar os processos de fabricação. Após a aprovação regulatória e o refinamento dos processos, a produção em larga escala é iniciada para atender à demanda do mercado."}
                    ]}/>


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