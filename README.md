## 🚀 **Badword SDK**

Uma SDK robusta para detectar palavras ofensivas utilizando APIs inteligentes.  
Ideal para aplicações que precisam filtrar conteúdo impróprio ou ofensivo de maneira eficiente.

### 📦 **Instalação**

```bash
npm install badword-sdk
```

---

## 📝 **Uso**

```typescript
import { BadwordSDK } from 'badword-sdk';

const sdk = new BadwordSDK({ apiKey: 'SUA_API_KEY' });

async function verifyMessage() {
  try {
    const result = await sdk.check({
      text: "Message to verify",
    });

    console.log(result); // { isBadword: true }
  } catch (error) {
    console.error('Error verifying the message: ', error);
  }
}
```

---

## 📚 **API**

### **Instanciando a SDK**

Para utilizar a SDK, você precisa instanciá-la com a sua chave de API:

```typescript
const sdk = new BadwordSDK({ apiKey: 'SUA_API_KEY' });
```

---

### **check({ text })**

Verifica se uma mensagem contém palavras ofensivas, considerando o contexto e a tolerância informada.

#### **Parâmetros**
- `text` (string) - A mensagem que será verificada.

#### **Retorno**
O método retorna um objeto com a seguinte estrutura:

```typescript
{
  isBadword: boolean;
}
```

#### **Exemplo de Retorno**
```json
{
  "isBadword": true
}
```

---

## 📌 **Tratamento de Erros**

Caso ocorra um erro durante a verificação, a SDK lançará uma exceção que pode ser tratada da seguinte forma:

```typescript
try {
  const result = await sdk.check({ text: "Mensagem" });
  console.log(result);
  console.error("Error verifying the message: ", error.message);
}
```

---

## 💡 **Contribuição**

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir issues e pull requests no [repositório do GitHub](https://github.com/seu-repo/badword-sdk).

---

## 📝 **Licença**

Este projeto está licenciado sob a [MIT License](./LICENSE).
