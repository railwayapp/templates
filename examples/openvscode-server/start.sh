#!/bin/sh

exec $OPENVSCODE_SERVER_ROOT/bin/openvscode-server --port $PORT --connection-token "${TOKEN:-$(openssl rand -hex 32)}" --host 0.0.0.0 -- $*