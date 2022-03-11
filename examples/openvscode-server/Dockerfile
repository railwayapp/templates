# created by GrimZZZ-404 & Milo123459 & aleksrutins
FROM gitpod/openvscode-server:${RELEASE_TAG}
ARG RELEASE_TAG=latest PORT
RUN apt-get install -y openssl
RUN GEN_TOKEN=$(openssl -rand hex)
ARG TOKEN=$GEN_TOKEN
ENTRYPOINT [ "/bin/sh", "-c", "exec ${OPENVSCODE_SERVER_ROOT}/bin/openvscode-server --port ${PORT} --connection-token ${TOKEN}", "--host", "0.0.0.0",  "--" ]