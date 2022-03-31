// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainsController {

    public async({render}){
        return render.view('main/index')
    }

}
