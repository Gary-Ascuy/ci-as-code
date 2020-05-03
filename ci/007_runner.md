# GitLab CI - Runner

### Setup Docker & Docker Compose

```sh
$ mkdir software && cd software/
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sh get-docker.sh
$ sudo usermod -aG docker root # to avoid use sudo all the time

$ sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

```sh
# Test Docker Compose and Docker
$ docker --version
$ docker-compose --version
```

### Setup Runner

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
    --non-interactive --name ci-as-code \
    --url https://gitlab.com --registration-token "$TOKEN" \
    --executor docker --docker-image docker:latest \
    --docker-volumes "/var/run/docker.sock:/var/run/docker.sock"
    --docker-volumes "/cache"
```

# Start Runner

```sh
$ docker run -d --name gitlab-runner --restart always \
    -v $(pwd):/etc/gitlab-runner \
    -v /var/run/docker.sock:/var/run/docker.sock \
    gitlab/gitlab-runner:latest
```
