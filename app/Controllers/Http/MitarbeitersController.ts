import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mitarbeiter from 'App/Models/Mitarbeiter'


export default class MitarbeitersController {
    public async index() {
        const mitarbeiter = await Mitarbeiter.query()
        return mitarbeiter
    }
    public async store({request, response}: HttpContextContract) {
        const body = request.body(); // TODO: validieren

        const mitarbeiter = await Mitarbeiter.create(body)

        response.status(201)
    }
}
