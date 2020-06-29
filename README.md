# nwl-01_ecoleta_web
Projeto desenvolvido na Next Week Level pela RocketSeat.

# :question: Por quê? 
Aplicativo desenvolvido em Typescrypt com a função de criar os pontos de coleta do sistema Ecoleta, podendo escolher o nome, imagem, localização(mapa) e outros dados do ponto de coleta </br>

# :camera: Screenshot
![Screenshot](https://github.com/diegodls/nwl-01_ecoleta_web/blob/asset/web_asset_git.png?raw=true)</br>

# :rocket: Iniciando
Para executar esses aplicativos, você deverá:

* Clonar o repositório com o comando `git clone` ([veja mais](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository)), ou fazer o download.
* Abra um prompt de comando (famoso cmd/terminal) na pasta raiz ou navegue até ela, e insira o comando `npx isntall` ou `npm install` ou `yarn install`, dependendo do gerenciador de pacotes que você usa, este comando serve para instalar os pacotes/módulos utilizado nesse projeto
* Após a instalação dos pacotes/módulos, você deverá iniciar as migrations com o comando `yarn kmigrate` e depois `yarn kseed`, para popular o banco de dados (foi utilizado o sqlite).
* Antes de executar esse aplicativo, você deverá primeiro configurar a parte do servidor, você pode obtê-lo logo abaixo
* Após configurar corretamente o servidor (abaixo), você já pode iniciar o servidor com o comando `yarn start`.
* Por padrão, o projeto irá ser executado utilizando a url `http://localhost` na porta `3333`, ficando assim `http://localhost:3333`, a porta deve ser a mesma configurada no servidor.

# :hammer: Aplicativos
Fazem parte deste projeto os seguintes aplicativos: </br>
[Server](https://github.com/diegodls/nwl-01_ecoleta_server/tree/master) - Desenvolvido em Typescript.
[Mobile](https://github.com/diegodls/nwl-01_ecoleta_mobile) - Desenvolvido em React Native, utilizando Typescript. </br>

# :nut_and_bolt: Módulos
Neste projeto foram utilizado os seguintes módulos:</br>
[react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - *Criação de rotas e navegação entre telas*</br>
[leaflet](https://leafletjs.com/) - *Biblioteca em javascript para o uso interativo de mapas*</br>
[react-leaflet](https://react-leaflet.js.org/) - *Componente para o uso da biblioteca leaflet*</br>
[axios](https://github.com/axios/axios) - *Cliente HTTP para comunicação com a API/Servidor*</br>
[react-dropzone](https://github.com/react-dropzone/react-dropzone) - *Componente de seleção/arraste de arquivos(para upload, neste caso)*</br>
[react-icons](https://github.com/react-icons/react-icons) - *Pacote com icones*
**E todas as dependências desses módulos que estão presentes em suas respectivas paginas.**

# :clap: Agradecimentos
Agradecimentos a todos os desenvolvedores dos módulos acima e a equipe RocketSeat.

# :rotating_light: Notas/Problemas
Me diga =)

# :warning: Licença
Você pode usar este aplicativos para estudos, e apenas para estudo, está proibido a sua publicação ou apropriação do código.
