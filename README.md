# Prozessautomatisierung für komplexe Webanwendungen mit [Grunt.js](http://gruntjs.com/)

## 0. Schritt – Vorbereitungen

Bitte gehen Sie sicher, dass [git](http://git-scm.com/), [node.js](http://nodejs.org/), [npm](https://www.npmjs.org/) und [grunt](http://gruntjs.com/) auf Ihrem Rechner installiert sind.

```bash
git --version
> git version 1.8.5.2 (Apple Git-48)

node -v
> v0.10.29

npm -v
> 1.4.14

grunt --version
> grunt-cli v0.1.13
```

## 1. Schritt - Gerüst und Abhängigkeiten

Die Files `package.json` und `Gruntfile.js` sind das Grundgerüst für unseren grunt Prozess.

Wir installieren nun das `grunt` Packet.

```bash
npm install --save-dev grunt
```

Hat alles geklappt verifizieren wir das mit unserem ersten grunt Befehl.

```bash
grunt hello
> Running "hello" task
> OK
> Alles funktioniert wie es soll.
> Done, without errors.
```
