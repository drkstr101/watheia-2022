FROM gitpod/workspace-full-vnc

ENV CYPRESS_CACHE_FOLDER=/workspace/.cypress-cache

# Install Cypress dependencies.
RUN sudo apt-get update \
  && sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  && sudo rm -rf /var/lib/apt/lists/*

USER gitpod

# Setup dev env
RUN npm install --global npm pnpm && \
  SHELL=bash npx @teambit/bvm@latest install && \
  echo 'export PATH=node_modules/.bin:$HOME/bin:$PATH' >> ${HOME}/.bashrc
