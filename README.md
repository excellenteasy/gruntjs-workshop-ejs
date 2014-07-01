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

## 2. Schritt – Einen Development Web Server mit Livereload

Wir installieren und laden notwendige tasks…

```bash
npm install grunt-contrib-watch grunt-contrib-connect --save-dev
```

… und konfigurieren sie so, dass unser HTML über HTTP ausgeliefert und bei Veränderungen sofort neugeladen wird.

## 3. Schritt – LESS zu CSS kompilieren

```bash
npm install grunt-contrib-less --save-dev
```

## 4. Schritt - JavaScript Dateien konkatenieren

```bash
npm install grunt-contrib-concat --save-dev
```

Die zwei JavaScript Dateien im Order `app/scripts/` sollen zu einer `main.js` im selben Ordner konkatiniert werden.

## 5. Schritt – Aufräumen

Das Gruntfile wird größer und unübersichtlicher. Im `scripts` und `styles` Ordner tummeln sich teils Quell- teil kompiliere Dateien. Unsere Task Konfiguration wird umständlich weil wir die kompilierten Datein aussparen müssen. Es wird Zeit aufzuräumen.

Gruntfile verkürzen und nie wieder Tasks laden:
```bash
npm install load-grunt-tasks grunt-contrib-copy grunt-contrib-clean --save-dev
```

Im Gruntfile alle `grunt.loadNpmTasks` ersetzen durch ein einziges `require('load-grunt-tasks')(grunt)`. Die Pfad-Redundanzen können mittels templating aufgelöst werden. Die Quelldateien werden von den kompilierten Dateien getrennt. Der entstandene `build` Ordner muss vor jedem Durchlauf gereinigt, und für git ignoriert werden. Die `index.html` Datei muss in den build Ordner kopiert werden.

## 6. Schritt – Zwischen Entwicklung und Deployment differenzieren

Während der Entwicklung möchten wir schnell neue Versionen unseres Codes ausprobieren, doch für das Deployment optimieren wir lieber die Ladezeit und minifizieren die Dateien.

```bash
npm install grunt-contrib-uglify --save-dev
```

Wir legen verschiedene Tasks für das Entwickeln und den Produktionseinsatz an.

## 7. Schritt – Code Qualität automatisiert prüfen

Beim Speichern schon die Benachrichtigung bekommen, ob der geschrieben Code auch JSHint kompatibel ist? Kein Problem.

```bash
npm install grunt-contrib-jshint --save-dev
```

## 8. Schritt – Releases automatisieren

Beim Erstellen von Releases kann viel falsch laufen. Mit `grunt-githooks` und `grunt-bump` können wir Fehler vermeiden.

```bash
npm install grunt-bump grunt-githooks --save-dev
```

## 9. Schritt – Eigene Tasks schreiben

Selbst zum Task Autor zu werden ist gar nicht schwer und eröffnet viele neue Möglichkeiten. Wir benutzen die `grunt.registerTask` API, um einen Task anzulegen, der die Version aus dem `package.json` liest und ins Terminal schreibt.
