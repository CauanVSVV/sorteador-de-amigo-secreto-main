import React from 'react'

const Formulario = () => {
  return (
    <form>
        <input type="text" placeholder="Insira os nomes dos participantes" />
        <button disabled={true}>Adicionar participante</button>
    </form>
  )
}

export default Formulario