/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import TestService from '#services/test_service'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.get('/welcome', async (ctx) => {
  return ctx.view.render('pages/welcome')
})

router.group(() => {
  router.get('/home', async () => {
    return 'Home Route'
  })
})

router.get('/testServiceRoute', () => {
  const value = 'Hello Ralph'

  TestService.logConsole(value)
})
