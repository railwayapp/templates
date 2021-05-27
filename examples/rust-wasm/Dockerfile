FROM rustlang/rust:nightly

# Install node
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && npm i -g yarn

# Install wasm-pack
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install deps
RUN yarn

# Build
RUN yarn build

# Start
CMD [ "yarn", "start" ]
