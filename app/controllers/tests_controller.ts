import type { HttpContext } from '@adonisjs/core/http'

export default class TestsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const message = 'Hello There'

    return response.ok({
      status: 'Success',
      message: `${message}, Welcome to AdonisJS 6 Class`,
      statusCode: 200,
    })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
