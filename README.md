# AngularScaffold
Basic, rock-stupid Angular app.

Pre-installation steps:
```
npm install -g bower
npm install -g karma
npm install -g gulp
```
Note: you only need to do this once on a given machine. -g installs these tools globally.

Download this app, then run:
```
npm install
bower install
```

Useful commands:
```
gulp: runs build & test
gulp build: copies source into dist
gulp test: runs karma (spec-running tool) & jshint (linter)
gulp autorun: starts a Node server, automatically runs gulp build when source changes, initiates auto-refresh in the browser when dist changes
```
autorun starts up a Node server, generally accessible by pointing your browser to localhost:8080

You probably want to just run gulp autorun