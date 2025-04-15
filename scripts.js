// Botões e campos do HTML
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectConvertDe = document.querySelector(".currency-converter-de");

// Função para converter valores
function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value || 0; // Pega o valor de entrada ou 0
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Exibe o valor em reais
  const currencyValueToConverted = document.querySelector(".currency-value"); // Exibe o valor convertido

  // Taxas de conversão
  const rates = {
    dolar: 5.2,
    euro: 5.8,
    real: 1.0,
    bitcoin: 401535.75,
    libra: 7.37,
  };

  // Configurações de formatação para cada moeda
  const currencyFormats = {
    dolar: { locale: "en-US", currency: "USD" },
    euro: { locale: "de-DE", currency: "EUR" },
    real: { locale: "pt-BR", currency: "BRL" },
    bitcoin: { locale: "en-US", currency: "BTC" },
    libra: { locale: "en-GB", currency: "GBP" },
  };

  // Qual moeda foi selecionada
  const selectedCurrency = currencySelect.value;

  // Atualizar valores convertidos
  if (selectedCurrency && rates[selectedCurrency]) {
    // Valor convertido
    const convertedValue = inputCurrencyValue / rates[selectedCurrency];
    currencyValueToConverted.innerHTML = new Intl.NumberFormat(
      currencyFormats[selectedCurrency].locale,
      {
        style: "currency",
        currency: currencyFormats[selectedCurrency].currency,
      }
    ).format(convertedValue);

    // Valor em reais
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }
}

// Função para alterar as configurações da moeda a converter DE
function changeCurrencyDe() {
  const currencyConvertDe = document.getElementById("currency-convert-de");
  const currencyImageDe = document.getElementById("currency-img-to-convert");

  // Atualiza o nome e a imagem da moeda
  const currencyDetails = {
    dolar: { name: "Dólar Americano", img: "./assets/dolar.png" },
    euro: { name: "Euro", img: "./assets/euro.png" },
    real: { name: "Real", img: "./assets/real.png" },
    bitcoin: { name: "Bitcoin", img: "./assets/bitcoin.png" },
    libra: { name: "Libra", img: "./assets/libra.png" },
  };

  const selectedCurrency = currencySelectConvertDe.value;
  if (currencyDetails[selectedCurrency]) {
    currencyConvertDe.innerHTML = currencyDetails[selectedCurrency].name;
    currencyImageDe.src = currencyDetails[selectedCurrency].img;
  }

  // Recalcula os valores ao mudar o select
  convertValues();
}

// Função para alterar a moeda a ser convertida PARA
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  // Atualiza o nome e a imagem da moeda
  const currencyDetails = {
    dolar: { name: "Dólar Americano", img: "./assets/dolar.png" },
    euro: { name: "Euro", img: "./assets/euro.png" },
    real: { name: "Real", img: "./assets/real.png" },
    bitcoin: { name: "Bitcoin", img: "./assets/bitcoin.png" },
    libra: { name: "Libra", img: "./assets/libra.png" },
  };

  const selectedCurrency = currencySelect.value;
  if (currencyDetails[selectedCurrency]) {
    currencyName.innerHTML = currencyDetails[selectedCurrency].name;
    currencyImage.src = currencyDetails[selectedCurrency].img;
  }

  // Recalcula os valores ao mudar o select
  convertValues();
}

// Eventos nos selects e botão
currencySelectConvertDe.addEventListener("change", changeCurrencyDe);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
