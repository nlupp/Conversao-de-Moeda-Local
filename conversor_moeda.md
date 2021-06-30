# Conversor de Moedas

### Requisitos 1
- Criar repositório no GitHub pessoal.
- Realizar commits diários.

### Requisitos 2
- Deve ser possível selecionar a moeda de origem e a de destino.
- Deve ser possível inserir o valor a ser convertido.
- Ao clicar no botão "Converter", deve exibir o cálculo da conversão do valor.

### Dicas
- Utilizar os conceitos apresentados no workshop de JS. 
- Valores das moedas:
```json
[
    {
        "BRL": {
            "EUA": 0.20,
            "EUR": 0.17,
            "LIB": 0.15,
            "RMB": 1.31
        }
    },
    {
        "EUA": {
            "EUR": 0.84,
            "LIB": 0.72,
            "RMB": 6.46,
            "BRL": 4.93
        }
    },
    {
        "EUR": {
            "LIB": 0.86,
            "RMB": 7.71,
            "BRL": 5.88,
            "EUA": 1.19
        }
    },
    {
        "LIB": {
            "RMB": 8.97,
            "BRL": 6.84,
            "EUA": 1.39,
            "EUR": 1.16
        }
    },
    {
        "RMB": {
            "BRL": 0.76,
            "EUA": 0.15,
            "EUR": 0.13,
            "LIB": 0.11
        }
    }
]
```
- Para converter os valores deve-se multiplicar o valor inserido pelo usuário com os valores contidos em cada objeto do JSON acima. **Exemplo:  USD -> EUR: 120 x 0.84 = 100,80 euros**

**Css - Não se preocupar. Usem a critiavidade.**