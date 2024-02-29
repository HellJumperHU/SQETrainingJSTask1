In order to run the tests the followings installations have to be executed
npm init -y
npm init wdio .

wdio (WebdriverIO) installation tutorial
https://webdriver.io/docs/gettingstarted/

I set this project with the followings
- Project name .... (YES)
- Test launch (Local for E2E....)
- Automation backend (Local machine)
- Framework (Mocha -> mochajs.org)
- Compiler (NO)
- Autogenerate test file (NO, but if you choose yes then just a couple of JS files will be added as "demo")
- File location (YES)
- Page objects (No)
- Reporter (spec, junit)
- Plugin (pressed enter on the "Wait for")
- Service to test setup (None selected due to chromedriver is inbuild by default in the current version)
- Base URL (skipped with Enter)
- At browser selection the Chrome and Firefox selected for me
- NPM install (YES)

Once everything is done.
Copy-paste the files again into the directory or use the git pull.
In terminal execute the "npm run wdio" command and everything should work
