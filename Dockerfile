FROM daocloud.io/library/ubuntu:bionic-20180710
RUN apt-get update    && apt-get install -y nginx
RUN apt-get install wget -y
RUN wget https://nodejs.org/dist/v10.7.0/node-v10.7.0-linux-x64.tar.xz
RUN apt-get install xz-utils
RUN tar -xJf node-v10.7.0-linux-x64.tar.xz
RUN mv node-v10.7.0-linux-x64 /opt/
RUN ln -s /opt/node-v10.7.0-linux-x64/bin/node /usr/local/bin/node
RUN ln -s /opt/node-v10.7.0-linux-x64/bin/npm /usr/local/bin/npm
WORKDIR /app
# COPY . /app/
EXPOSE 8080
# CMD ["npm","install"]
USER root
CMD ["npm","start" ]
# CMD [ "cp -r dist/* /var/www/html" ]
# CMD [ "rm -rf /app" ]
# CMD ["nginx","-g","daemon off;"]