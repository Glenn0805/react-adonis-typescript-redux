// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainsController {

    public async view({render}){
        return render.view('main/index')
    }

}
