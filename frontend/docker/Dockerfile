FROM sickp/alpine-nginx
LABEL maintainer "joerg.bellmann@googlemail.com"

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf

COPY dist/frontend /usr/share/nginx/html