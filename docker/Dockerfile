FROM ubuntu

RUN apt-get update
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN node -v
RUN npm -v
RUN npm install -g @vue/cli

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN addgroup --gid $GROUP_ID user
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user
RUN usermod -aG www-data user

USER user


WORKDIR /usr/src/app

EXPOSE 8080

CMD npm install && npm run serve