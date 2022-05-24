# xqstock

Utilitário para cotação de ativos listados na B3.

## Funcionalidades

- [X] Temas dark e light
- [X] Consulta de preço de fechamento diário de ativo(s) da B3 através de formulário
- [X] Acompanhar o desempenho de um ativo através de um gráfico de linha
- [ ] Comparar o desempenho de um ativo com indices do mercado financeiro
- [ ] Permitir que o usuário marque ativos como favoritos
- [ ] Persistir histórico de utilização do usuário para acesso futuro

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/gabrielrangel/xqstock-app.git
```

Entre no diretório do projeto

```bash
  cd xqstock-app
```

### Usando yarn

Instale as dependências

```bash
  yarn install --frozen-lockfile
```

Inicie o servidor

```bash
  yarn start
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu `.env.*.local`

| Parâmetro                     | Descrição                                                              |
| :----------                   | :-------------------------------------------------                     |
| `REACT_APP_XQSTOCK_APP_REPO`  | URL do repositório                                                     |
| `REACT_APP_XQSTOCK_API_URI`   | Endereço do servidor mongo                                             |
| `REACT_APP_XQSTOCK_API_TOKEN` | Segredo para criação de tokens                                         |
| `NODE_ENV`                    | Node environment mode                                                  |

## Stack utilizada

React, Styled Components, Material-UI.
