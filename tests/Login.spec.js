import { Login } from '../Page/LoginPage'
import { test, expect } from '@playwright/test'
let login

test.beforeEach(async ({ page }) => {
    login = new Login(page)
    await login.goto()
    await login.navigateToLogin()
})

test('Valid Login to Demoblaze app', async ({ page }) => {

    await login.validLogin()
    await login.assertionSuccessfulLogin()
})

test('Unsuccessful Login due to invalid username', async ({ page }) => {

    await login.invalidUsernameLogin()
    await login.assertionLoginUnsuccessfulDueToInvalidUsername()
})

test('Unsuccessful Login due to invalid password', async ({ page }) => {

    await login.invalidPasswordLogin()
    await login.assertionLoginUnsuccessfulDueToInvalidPassword()
})

test('Unsuccessful Login due to invalid credentials', async ({ page }) => {

    await login.invalidCredentials()
    await login.assertionLoginUnsuccessful()
})

test('Successful Logout',async({page})=>{
    await login.validLogin()
    await login.logout()
    await login.assertionSuccessfulLogout()
})