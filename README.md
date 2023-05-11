*This is an old development of mine and should not be forked or used as base for any kind of work, if you want to study how it works please feel free to use it, but any other kind of work should be done using more clean architecture.*  
*AniAPI was used for this project, but since then, it has discontinued it's online servers, if you want to run this you will need to build your own server of their [api (https://github.com/AniAPI-Team/AniAPI)](https://github.com/AniAPI-Team/AniAPI)*  

# HOW TO USE:  
in the project folder:
- run `git clone`
- run `npm install`
- configure your .env file with the `PORT_LISTENER` for local connection and `JWT` AniAPI token
- run `npx tailwindcss -i ./public/tailwind.css -o ./public/main.css`
- run `npm run dev`
- access by url [localhost:PORT_LISTENER](localhost), where PORT_LISTENER is the variable in your .env

-------------------------------------
# COMO USAR:  

- execute o comando `git clone`
- execute o comando `npm install`
- configure seu arquivo .env com as variaveis `PORT_LISTENER` para conexão local e `JWT` para o token da AniAPI
- execute o comando `npx tailwindcss -i ./public/tailwind.css -o ./public/main.css`
- execute o comando `npm run dev`
- acesse pela url [localhost:PORT_LISTENER](localhost), onde PORT_LISTENER é a variavel de seu .env
