import { expect } from 'allure-playwright'

const data = require('../Utils/LoginCredentials.json')
export class Login {
    constructor(page) {
        this.page = page
        this.homeLoginButton = page.locator('#login2')
        this.loginUsername = page.locator('#loginusername')
        this.loginPassword = page.locator('#loginpassword')
        this.loginButton = page.locator("//button[text()='Log in']")
        this.logoutButton = page.locator("//a[text()='Log out']")
    }

    async goto() {
        await this.page.goto("https://www.demoblaze.com/")
    }

    async navigateToLogin() {
        await this.homeLoginButton.click()
    }

    //Valid Credentials

    async validLogin() {
        const usernameValue = data.ValidLogin.loginUsername
        const passwordValue = data.ValidLogin.loginPassword
        await this.loginUsername.fill(usernameValue)
        await this.loginPassword.fill(passwordValue)
        await this.loginButton.click()
    }

    async assertionSuccessfulLogin() {
        await expect(this.logoutButton).toHaveText('Log out')
    }

    //Invalid Username Valid Password

    async invalidUsernameLogin() {
        const usernameValue = data.InvalidUsernameValidPassword.loginUsername
        const passwordValue = data.InvalidUsernameValidPassword.loginPassword
        await this.loginUsername.fill(usernameValue)
        await this.loginPassword.fill(passwordValue)
        await this.loginButton.click()

    }
    async assertionLoginUnsuccessfulDueToInvalidUsername() {
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        })
        //await this.loginButton.click()
    }

    //Valid Username Invalid Password

    async invalidPasswordLogin() {
        const usernameValue = data.ValidUsernameInvalidPassword.loginUsername
        const passwordValue = data.ValidUsernameInvalidPassword.loginPassword
        await this.loginUsername.fill(usernameValue)
        await this.loginPassword.fill(passwordValue)
        await this.loginButton.click()

    }

    async assertionLoginUnsuccessfulDueToInvalidPassword() {
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Wrong password.')
            await dialog.accept()
        })
        //await this.loginButton.click()
    }

    //Invalid Username and Password

     async invalidCredentials() {
        const usernameValue = data.InvalidLogin.loginUsername
        const passwordValue = data.InvalidLogin.loginPassword
        await this.loginUsername.fill(usernameValue)
        await this.loginPassword.fill(passwordValue)
        await this.loginButton.click()
    }

    async assertionLoginUnsuccessful() {
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        })
             

    }
 async logout(){
        await this.logoutButton.click()
    }

    async assertionSuccessfulLogout(){
        await expect(this.homeLoginButton).toBeVisible()
    }
}

   