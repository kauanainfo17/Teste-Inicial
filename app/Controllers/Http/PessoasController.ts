import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PessoasController {
  public async index ({ view }: HttpContextContract) {
    const Pessoas = [{
      nome : 'Banana',
      idade : '208'
    },
    {
      nome : 'Melancia',
      idade : '456'
    },
    {
      nome : 'Xuxu',
      idade : '19'
    }]
    return view.render('Pessoas/index', { Pessoas })

  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
