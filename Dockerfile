FROM nginx:stable-alpine

COPY ./nginx-less-privileged-http.conf /etc/nginx/conf.d/default.conf

RUN sed "s%^pid\s\+[a-z/.]\+;%pid        /tmp/nginx.pid;%" /etc/nginx/nginx.conf > /etc/nginx/nginx-less-privileged.conf

COPY ./* /usr/share/nginx/html/
COPY ./files/* /usr/share/nginx/html/files/

CMD ["nginx", "-c", "/etc/nginx/nginx-less-privileged.conf", "-g", "daemon off;"]
