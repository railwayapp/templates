# created by GrimZZZ-404 & Milo123459
ARG RELEASE_TAG=latest PORT TOKEN
FROM gitpod/openvscode-server:${RELEASE_TAG}
ENTRYPOINT [ "/bin/sh", "-c", "exec ${OPENVSCODE_SERVER_ROOT}/server.sh --port ${PORT} --connection-token ${TOKEN}",  "--" ]