/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.get('/welcome', async (ctx) => {
  return ctx.view.render('pages/welcome')
})

router
  .group(() => {
    router.get('/home', async () => {
      return 'Home Route'
    })
  })
  .as('Home')
