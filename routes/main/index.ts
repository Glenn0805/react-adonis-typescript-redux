/*eslint-disable */
'use strict'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/','main/MainsController.view')
}).prefix('main')