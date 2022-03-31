/*eslint-disable */
'use strict'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/','Home/HomeController.view')
    Route.get('test','Home/HomeController.test')
}).prefix('home')