FROM openjdk:8-jdk-slim
MAINTAINER joerg.bellmann@googlemail.com
EXPOSE 8080 7979
RUN groupadd -r runner
RUN useradd -r -g runner runner
USER runner
COPY ${project.build.finalName}.${project.packaging} /
ENTRYPOINT exec java $JAVA_OPTS -jar ${project.build.finalName}.${project.packaging} $JAVA_ARGS
