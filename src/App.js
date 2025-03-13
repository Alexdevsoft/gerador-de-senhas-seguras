import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // Função para gerar uma senha aleatória
  const generatePassword = () => {
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      alert('Selecione pelo menos uma opção para gerar a senha.');
      return;
    }

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = '';
    let generatedPassword = '';

    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  // Função para copiar a senha para a área de transferência
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Senha copiada para a área de transferência!');
    });
  };

  return (
    <div className="container">
      <h1>Gerador de Senhas Seguras</h1>
      <div className="password-container">
        <input type="text" value={password} readOnly placeholder="Sua senha aparecerá aqui" />
        <button onClick={copyToClipboard}>Copiar</button>
      </div>
      <div className="settings">
        <label>
          Comprimento da Senha:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            min="4"
            max="30"
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Incluir Letras Maiúsculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Incluir Letras Minúsculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Incluir Números
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Incluir Símbolos
        </label>
      </div>
      <button onClick={generatePassword}>Gerar Senha</button>
    </div>
  );
}

export default App;