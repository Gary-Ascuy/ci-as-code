# GitLab CI - Runner

# Setup Runner

```sh
$ docker pull gitlab/gitlab-runner:latest
$ docker pull docker:latest
$ docker pull docker/compose:latest
$ docker pull node:latest
```

```sh
$ export TOKEN=<TOKEN FROM GITLAB>

$ docker run --rm -it -v $(pwd):/etc/gitlab-runner \
    gitlab/gitlab-runner register \
    --non-interactive --name traveler-ci \
    --url https://gitlab.com --registration-token "$TOKEN" \
    --executor docker --docker-image docker:lastest \
    --docker-volumes "/var/run/docker.sock:/var/run/docker.sock" --docker-volumes "/cache"
```

# Start Runner

```sh
$ docker run -d --name gitlab-runner --restart always \
    -v $(pwd):/etc/gitlab-runner \
    -v /var/run/docker.sock:/var/run/docker.sock \
    gitlab/gitlab-runner:latest
```
