// Efeito de mudança no Header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 10px 30px rgba(30, 53, 47, 0.1)';
    } else {
        header.style.padding = '0';
        header.style.boxShadow = '0 2px 20px rgba(30, 53, 47, 0.05)';
    }
});

// Lógica da Calculadora de Economia
function calcularEconomia() {
    const area = document.getElementById('area').value;
    const cultura = document.getElementById('cultura').value;
    const resultBox = document.getElementById('resultado');
    const resultText = document.getElementById('texto-resultado');

    // Validação de entrada
    if (!area || area <= 0) {
        alert('Por favor, insira um número válido de hectares.');
        return;
    }

    // Fatores aproximados de economia (litros por hectare/ano) utilizando técnicas eficientes
    let大fatorEconomia = 0;
    if (cultura === 'graos') fatorEconomia = 450000;
    if (cultura === 'frutas') fatorEconomia = 600000;
    if (cultura === 'hortalicas') fatorEconomia = 350000;

    const economiaTotal = area *大fatorEconomia;
    
    // Formatando o número para o padrão de moeda/numeração brasileiro (Ex: 1.500.000)
    const economiaFormatada = economiaTotal.toLocaleString('pt-BR');

    // Atualiza o conteúdo do texto na tela
    resultText.innerHTML = `Ao adotar sistemas inteligentes de irrigação (como gotejamento e sensores), sua propriedade de <strong>${area} hectares</strong> pode economizar aproximadamente <strong>${economiaFormatada} litros</strong> de água por ano, além de reduzir custos com energia!`;
    
    // Exibe a caixa de resultados alterando o display para block
    resultBox.style.display = 'block';
    resultBox.style.animation = 'fadeInUp 0.5s ease';
}
