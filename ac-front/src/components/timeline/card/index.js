import React, { useState } from "react";
import * as Styled from './style';
import { DefaultImg } from '../../../assets/imgs/index';
import { Text } from "../../text";

export function TimelineCard({ steps }) {
    const [selectedCard, setSelectedCard] = useState(0); // Estado para rastrear o card selecionado

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <>
        <Text space={10} text={["A Pesquisa e Desenvolvimento de Produtos Químicos é uma área essencial na indústria química e em muitos outros setores. Nós da Ativa Chemical nos envolvemos na investigação e criação de novos compostos químicos, bem como a melhoria de produtos químicos existentes.",
        "Nossa área de Pesquisa e Desenvolvimento de Produtos Químicos está voltada para impulsionar a inovação na indústria química, resultando em produtos mais eficientes, sustentáveis e seguros. Esse processo permite a resolução de desafios complexos, como o desenvolvimento de materiais avançados, medicamentos mais eficazes e tecnologias com um papel importante na criação de produtos e processos mais sustentáveis, reduzindo impactos negativos no meio ambiente.Além de criar novos produtos, a pesquisa química também se concentra na melhoria de produtos já existentes, tornando-os mais competitivos e eficientes."]} />
        <Styled.Content>
        <Styled.CardsContent>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <Styled.Card
                        onClick={() => handleCardClick(index)}
                        isSelected={index === selectedCard}
                    >
                        <Styled.Flex>
                            <Styled.Img src={DefaultImg} width={50}/>
                            <Text text={`${index + 1}. ${Object.keys(step)[0]}`} />
                        </Styled.Flex>
                    </Styled.Card>
                    {index < steps.length - 1 && <Styled.Line />}
                </React.Fragment>
            ))}

        </Styled.CardsContent>

        <Styled.Description>
            <Text text={`${Object.values(steps[selectedCard])[0]}`} />
        </Styled.Description>

        </Styled.Content>
        </>
    );
}
