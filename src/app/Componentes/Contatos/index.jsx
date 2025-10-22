"use client"; // Necessário para usar o useState
import { Phone, Mail, Facebook, Instagram} from "lucide-react";
import { useState } from 'react';
import estilos from './Contatos.module.css';

export default function Contatos() {
    // 1. ESTADOS PARA COLETAR OS DADOS DO FORMULÁRIO
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: ''
    });
    const [status, setStatus] = useState(''); // Para feedback ao usuário

    // 2. HANDLER PARA ATUALIZAR O ESTADO
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // 3. HANDLER PARA ENVIAR O FORMULÁRIO
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const response = await fetch('/api/contato', { // Chama o Route Handler
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Mensagem enviada com sucesso! Em breve entraremos em contato.');
                // Limpa o formulário após o envio
                setFormData({ nome: '', telefone: '', email: '', mensagem: '' });
            } else {
                setStatus(`Erro ao enviar: ${result.message}`);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            setStatus('Erro de conexão. Tente novamente mais tarde.');
        }
    };

    return (
        <>
        <section id="Contatos" className={estilos.section}>
            <h2>Contate-nos</h2>
            <div className={estilos.container_contatos}>
                
                {/* 4. LIGAÇÃO DO FORMULÁRIO: ON SUBMIT e ON CHANGE */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            name="nome" 
                            placeholder="Seu Nome" 
                            value={formData.nome}
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="telefone" 
                            placeholder="Número de telefone" 
                            value={formData.telefone}
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="mensagem"
                            className="message-box" 
                            placeholder="Mensagem" 
                            value={formData.mensagem}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className={estilos.botao}>
                        <button type="submit" disabled={status === 'Enviando...'}>
                            {status === 'Enviando...' ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>
                </form>
            </div>
            {/* 5. EXIBE O STATUS */}
            {status && <p className={estilos.statusMessage}>{status}</p>} 
        </section>
        <footer className={estilos.rodape}>
            <div className={estilos.container_info}>

                <div className={estilos.linha}>
                    <Phone size={20} color="#17b978" />
                    <span>Ligue para (51)98275-4395</span>
                </div>

                <div className={estilos.linha}>
                    <Mail size={20} color="#17b978" />
                    <span>construliima@gmail.com</span>
                </div> 
            </div>

            <div className={estilos.container_redes}>
                <a href="https://www.facebook.com/costruliima" aria-label="Facebook">
                    <Facebook color="white" size={22} />
                </a>
                <a href="https://www.instagram.com/construliima/" aria-label="Instagram">
                    <Instagram color="white" size={22} />
                </a>
            </div>

            <p className={estilos.copy}>© 2025 Construlima - Todos os direitos reservados</p>
        </footer>
        </>
    );
}