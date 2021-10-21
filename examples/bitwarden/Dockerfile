FROM vaultwarden/server:latest

ARG PORT

COPY railway.sh /railway.sh

EXPOSE ${PORT}

CMD [ "./railway.sh" ]
