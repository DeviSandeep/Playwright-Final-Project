import { expect } from 'playwright/test'

const data = require('../Utils/SignupCredentials.json')

export class Signup {
    constructor(page) {
        this.page = page
        this.signupHomeButton = page.locator('#signin2')
        this.signupUsername = page.locator('#sign-username')
        this.signupPassword = page.locator('#sign-password')
        this.signupButton = page.locator("//button[text()='Sign up']")
        this.closeButton = page.locator("//div[@id='signInModal']//button[@data-dismiss='modal' and text()='Close']")
    }

    async goto() {
        await this.page.goto("https://www.demoblaze.com/")
    }

    async navigateToSignup() {
        await this.signupHomeButton.click()
    }

    async SignupCredential() {
        const usernameValue = data.signupUsername
        const passwordValue = data.signupPassword
        await this.signupUsername.fill(usernameValue)
        await this.signupPassword.fill(passwordValue)

    }

    async assertionSignupSuccessful() {
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Sign up successful.')
            await dialog.accept()
        })
        await this.signupButton.click()
    }

    //Sign up and Close

    async close() {
        await this.closeButton.click()
    }

    async assertionBackToHomePage() {
        await expect(this.page).toHaveURL('https://www.demoblaze.com/')
    }
}