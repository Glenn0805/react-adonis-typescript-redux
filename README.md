# react-adonis-typescript
  1. run "npm install"
  2. create .env file
  3. copy .env.example to .env
  4. run "adonis key:generate"
  5. in .env file paste the generated key in the APP_KEY
  6. open terminal and run "node ace serve --watch"
  7. open another terminal and run "npm run watch"

#For Setup the Migration And Model
  1.npm install @adonisjs/lucid@alpha
  2.node ace invoke @adonisjs/lucid
    -choose Database
  3.npm install mysql
  run this commands to add model commands and migration commands
