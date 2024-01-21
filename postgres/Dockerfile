FROM postgres:12

ENV POSTGRES_USER username
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB nestjs_app

COPY initdb.sql /docker-entrypoint-initdb.d/
