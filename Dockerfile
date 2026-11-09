FROM nginx:alpine

# Copiar configuración optimizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos estáticos de la web
COPY site /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
