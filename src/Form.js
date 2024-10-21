// src/Form.js

import React, { useState } from 'react';
import './Form.css'; 

const Form = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault(); 

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    setResultado(imcFormatado);
    setClassificacao(obterClassificacao(imc)); 
  };

  const obterClassificacao = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  const resetar = () => {
    setPeso('');
    setAltura('');
    setResultado('');
    setClassificacao('');
  };

  return (
    <form className="formulario" onSubmit={calcularIMC}>
      <h2>Calcule seu IMC</h2>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso em kg"
          required
        />
      </div>
      <div>
        <label>Altura (m):</label>
        <input
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura em metros"
          required
        />
      </div>
      <button type="submit">Calcular IMC</button>
      <button type="button" onClick={resetar}>Resetar</button>

      {resultado && (
        <div>
          <p>Seu IMC é: {resultado}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </form>
  );
};



export default Form;
