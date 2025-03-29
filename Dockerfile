FROM nginx:latest

# Copiar os arquivos do projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80 para acessar o servidor
EXPOSE 80

# Comandos de terminal:
    # => Cria a imagem com o nome tarefa1-web

    # docker build -t tarefa1-web .  

    # => Executa a imagem em um container chamado tarefa1-container, 
    # mapeando a porta 8080 do host para a porta 80 do container
    
    # docker run -d -p 8080:80 --name tarefa1-container tarefa1-web 

    # => Parar o container
    # docker stop tarefa1-container

    # => Iniciar/Reiniciar o container
    # docker start tarefa1-container

    # => Remover o container
    # docker rm tarefa1-container

    # => Listar os containers em execução
    # docker ps

    # => Listar todos os containers (incluindo os parados)
    # docker ps -a

    # => Listar as imagens
    # docker images

###############################################################

# Colocar no docker hub
# docker login
# docker tag tarefa1-web saraiva1/tarefa1-web:latest
# docker push saraiva1/tarefa1-web:latest

# Para baixar a imagem do docker hub
# docker pull saraiva1/tarefa1-web:latest
