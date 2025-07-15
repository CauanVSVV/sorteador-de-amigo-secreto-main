import React from 'react';
import { render, screen } from '@testing-library/react';
import Formulario from './Formulario';


test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)

    // Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    // Encontrar no DOM o botão
    const botao = screen.getByRole('button')

    // Verificar se o input está no DOM
    expect(input).toBeInTheDocument()
    // Verificar se o botão está desabilitado
    expect(botao).toBeDisabled()
})
