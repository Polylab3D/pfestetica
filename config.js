// ==========================================
// CONFIGURAÇÃO DO SITE MBWAY - WHITE LABEL
// ==========================================
// Edite apenas este arquivo para personalizar o site para cada cliente

const CONFIG = {
  // Informações do Negócio
  business: {
    name: 'Pollyana Félix Estética',           // Ex: "Nails Designer"
    logoFile: 'logo.svg',               // Nome do arquivo do logo (deve estar na mesma pasta)
  },

  // Número MBWay
  mbway: {
    phoneDisplay: '+351 966 737 128',        // Formato visual (com espaços)
    phoneValue: '966737128',            // Número real (sem espaços, será copiado)
  },

  // Cores e Estilo
  theme: {
  primaryColor: '#B08A2E',
  primaryColorHover: '#8F6E20',
  backgroundColor: '#F5F0E6',
  cardBackground: '#FFFDF9',
  cardShadow: '0 8px 28px rgba(90, 68, 20, 0.10)',
  },

  // Textos Customizáveis
  text: {
    pageTitle: 'Pagamento MBWay',       // Título da aba do navegador
    label: 'Número MBWay',              // Texto acima do número
    buttonText: 'Copiar e Abrir MB WAY', // Texto do botão
    successMessage: '✓ Copiado! A abrir MB WAY...', // Mensagem de sucesso
    errorMessage: 'Erro ao copiar. Seleciona o número manualmente.', // Mensagem de erro

    // Instruções
    step1: 'Clica no botão',
    step2: 'No MB WAY → cola o número',
  },
};
