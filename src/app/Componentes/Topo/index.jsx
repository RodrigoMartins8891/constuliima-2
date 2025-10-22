"use client";
import { useState } from "react";
import estilos from "./Topo.module.css";

export default function Topo() {
    const [ativo, setAtivo] = useState("HOME");

    return (
        <header className={estilos.topo}>
            <div>
                <h1>ConstruLiima</h1>
            </div>
            <nav>
                <a
                    href="#"
                    onClick={() => setAtivo("HOME")}
                    className={ativo === "HOME" ? estilos.ativo : ""}
                >
                    HOME
                </a>
                <a
                    href="#Servico"
                    onClick={() => setAtivo("SERVIÇOS")}
                    className={ativo === "SERVIÇOS" ? estilos.ativo : ""}
                >
                    SERVIÇOS
                </a>
                <a
                    href="#Projetos"
                    onClick={() => setAtivo("PROJETOS")}
                    className={ativo === "PROJETOS" ? estilos.ativo : ""}
                >
                    PROJETOS
                </a>
                <a
                    href="#Contatos"
                    onClick={() => setAtivo("CONTATO")}
                    className={ativo === "CONTATO" ? estilos.ativo : ""}
                >
                    CONTATE-NOS
                </a>
            </nav>
        </header>
    );
}
