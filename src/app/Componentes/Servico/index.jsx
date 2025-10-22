"use client";
import React, { useState } from 'react';

import estilos from './Servico.module.css';
import Image from "next/image";
import s1 from '/public/s1.png';
import s2 from '/public/s2.png';
import s3 from '/public/s3.png';

export default function Servico() {
    const [isConstrucaoExpanded, setIsConstrucaoExpanded] = useState(false);
    const [isRenovacaoExpanded, setIsRenovacaoExpanded] = useState(false);
    const [isReconstrucaoExpanded, setIsReconstrucaoExpanded] = useState(false);
    return (
        <section id="Servico" className={estilos.container_servico}>
            <h2>Nossos <span>Serviços</span></h2>
            <div className={estilos.container_cards}>
                {/* Card Construção */}
                <div className={estilos.cards}>
                    <Image className={estilos.imagem} src={s1} alt="Serviço de Construção" width={1200} height={600} />
                    <h3>Construção</h3>
                    <p className={estilos.textoCurto}>
                        Damos vida ao seu projeto do zero. Nossa equipe garante qualidade, segurança e pontualidade em cada etapa da obra...
                    </p>
                    <div className={`${estilos.textoCompleto} ${isConstrucaoExpanded ? estilos.expanded : ''}`}>
                        <p>
                            Desde a fundação até o acabamento final, trabalhamos com materiais de alta qualidade e profissionais experientes, entregando uma base sólida e duradoura para o seu futuro.
                        </p>
                    </div>
                    <button className={estilos.botaoLeiaMais} onClick={() => setIsConstrucaoExpanded(!isConstrucaoExpanded)}>
                        {isConstrucaoExpanded ? 'Ver menos' : 'Leia mais'}
                    </button>
                </div>

                {/* Card Renovação */}
                <div className={estilos.cards}>
                    <Image className={estilos.imagem} src={s2} alt="Serviço de Renovação" width={1200} height={600} />
                    <h3>Renovação</h3>
                    <p className={estilos.textoCurto}>
                        Transforme e modernize seu espaço com agilidade e praticidade, sem precisar de grandes reformas...
                    </p>
                    <div className={`${estilos.textoCompleto} ${isRenovacaoExpanded ? estilos.expanded : ''}`}>
                        <p>
                            Atualizamos ambientes, substituímos revestimentos e renovamos layouts, trazendo mais conforto, funcionalidade e estilo ao seu imóvel, com o mínimo de transtorno.
                        </p>
                    </div>
                    <button className={estilos.botaoLeiaMais} onClick={() => setIsRenovacaoExpanded(!isRenovacaoExpanded)}>
                        {isRenovacaoExpanded ? 'Ver menos' : 'Leia mais'}
                    </button>
                </div>

                {/* Card Reconstrução */}
                <div className={estilos.cards}>
                    <Image className={estilos.imagem} src={s3} alt="Serviço de Reconstrução" width={1200} height={600} />
                    <h3>Reconstrução</h3>
                    <p className={estilos.textoCurto}>
                        Quando sua estrutura sofre danos ou precisa ser refeita, nossa equipe garante a restauração completa do seu imóvel...
                    </p>
                    <div className={`${estilos.textoCompleto} ${isReconstrucaoExpanded ? estilos.expanded : ''}`}>
                        <p>
                            Trabalhamos para recuperar, reforçar e aprimorar a estrutura existente, devolvendo segurança, estética e eficiência ao espaço, sempre com atenção a cada detalhe.
                        </p>
                    </div>
                    <button className={estilos.botaoLeiaMais} onClick={() => setIsReconstrucaoExpanded(!isReconstrucaoExpanded)}>
                        {isReconstrucaoExpanded ? 'Ver menos' : 'Leia mais'}
                    </button>
                </div>
            </div>

        </section>
    );
}