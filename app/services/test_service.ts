import { Exception } from '@adonisjs/core/exceptions'

export default class TestService {
  static logConsole(value: string) {
    if (!value)
      return new Exception('Provide a value to be logged', {
        code: 'E_NOT_FOUND',
        status: 403,
      })
    return console.log(value)
  }
}
