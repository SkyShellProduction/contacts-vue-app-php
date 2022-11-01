# vcontact
## Stack
- Vue3 Composition Api
- Vue Router
- Pinia State Manager
- Typescript
- PHP 7.4
- MariaDB 10.5

you should have local-server to testing this app, f.e. OpenServer
[Version without backend](https://github.com/SkyShellProduction/contacts-vue-app)
## Project Setup
1. Go to OpenServer folder, open domains folder and create folder "vcontact-app.com"
2. Copy all files from this repository to this folder
3. Go to PhpMyAdmin, create database "vcontact", encoding "utf8"
4. Import database from server directory/vcontact.sql
5. If you have another user and password for PhpMyAdmin, change the db connection in server directory/functions.php
6. Reload OpenServer and follow next steps
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
