// src/app/api/contato/route.js

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Inicializa o cliente Supabase usando as variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função que lida com requisições POST
export async function POST(request) {
    try {
        // 1. Obtém os dados do corpo da requisição
        const data = await request.json();
        
        // 2. Insere os dados na tabela 'contatos' do Supabase
        const { error } = await supabase
            .from('Contatos') // Nome da sua tabela
            .insert([
                { 
                    nome: data.nome,
                    telefone: data.telefone,
                    email: data.email,
                    mensagem: data.mensagem,
                },
            ]);

        if (error) {
            console.error('Erro ao enviar para o Supabase:', error);
            // Retorna um erro amigável ao cliente
            return NextResponse.json({ message: 'Falha ao enviar o contato.', error: error.message }, { status: 500 });
        }

        // 3. Sucesso
        return NextResponse.json({ message: 'Contato enviado com sucesso!' }, { status: 200 });
        
    } catch (error) {
        // Erro de parsing ou outro erro interno
        return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
    }
}