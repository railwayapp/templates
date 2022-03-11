# created by GrimZZZ-404 & Milo123459 & aleksrutins
ARG RELEASE_TAG=latest PORT TOKEN
FROM gitpod/openvscode-server:${RELEASE_TAG}
USER root
RUN apt-get install -y openssl
USER openvscode-server
ENV OPENVSCODE_SERVER_ROOT=${OPENVSCODE_SERVER_ROOT}
ENV TOKEN=${TOKEN}
ENV PORT=${PORT}
ADD start.sh /_railway/start.sh
ENTRYPOINT [ "/bin/sh", "/_railway/start.sh" ]