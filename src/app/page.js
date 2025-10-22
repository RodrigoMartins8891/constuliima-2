import Topo from "./Componentes/Topo";
import Casa from "./Componentes/Casa";
import Servico from "./Componentes/Servico";
import Projetos from "./Componentes/Projetos";
import Contatos from "./Componentes/Contatos";


export default function Home() {
    return (
        <main >
            <Topo />
            <Casa />
            <Servico />
            <Projetos />
            <Contatos />
        </main>
    )
}