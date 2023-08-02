FROM node:18

RUN mkdir -p /home/app

# Copiar todo el contenido del directorio actual al directorio /home/app en el contenedor
COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]
