import estilos from './Projetos.module.css';
import Image from 'next/image';
import obra1 from '/public/obra1.jpeg';
import obra2 from '/public/obra2.jpeg';
import obra3 from '/public/obra3.jpeg';
import obra4 from '/public/obra4.jpeg';
import obra5 from '/public/obra5.jpeg';
import obra6 from '/public/obra6.jpeg';

export default function Projetos () {
    return (
        <section id="Projetos" className={estilos.projetos}>
            <h2>Nossos <span>Projetos</span></h2>
            <div className={estilos.container_imagem}>
                <Image className={estilos.imagem} src={obra1} alt="Serviço de Construção" width={400} height={400} />
                <Image className={estilos.imagem} src={obra2} alt="Serviço de Construção" width={400} height={400} />
                <Image className={estilos.imagem} src={obra3} alt="Serviço de Construção" width={400} height={400} />
                <Image className={estilos.imagem} src={obra4} alt="Serviço de Construção" width={400} height={400} />
                <Image className={estilos.imagem} src={obra5} alt="Serviço de Construção" width={400} height={400} />
                <Image className={estilos.imagem} src={obra6} alt="Serviço de Construção" width={400} height={400} />
            </div>
        </section>
    )
}