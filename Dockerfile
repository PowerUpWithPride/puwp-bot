FROM node:latest

ADD * /app/

RUN cd /app && npm install

ENV DISCORD_BOT_TOKEN
ENV RUNNER_ROLE_ID
ENV COMMENTATOR_ROLE_ID
ENV RUNNERS_CHANNEL_ID

CMD cd /app && /usr/local/bin/node server.js
