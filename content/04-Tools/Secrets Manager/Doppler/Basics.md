---
creation date: 2025-11-27 16:41
---
#04-Tools #Secrets-Manager #Doppler

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Intro

<< ---------------------------------------------------------------- >>
Bruh the CLI has a TUI this shit is fucking sick


For applications that read secrets from a file, you can mount an ephemeral .env or JSON file. You can also mount a custom file format using a [secrets template](https://docs.doppler.com/docs/secret-injection-with-templates).

Your secrets are mounted as a Linux named pipe that can be read like a file and is automatically cleaned up when the Doppler process exits, making it the **only** secure method for supplying secrets via the file system.

Simply specify the `--mount` flag and pass the name of the file to mount. The format will automatically be detected for .env and .json files.

To mount an .env file:

```
doppler run --mount .env -- npm start
```
