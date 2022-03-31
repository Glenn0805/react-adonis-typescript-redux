// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainsController {

    public async view({view}){
        return view.render('main/index')
    }

}
