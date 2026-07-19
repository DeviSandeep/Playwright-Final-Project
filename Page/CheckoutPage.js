import { expect } from 'allure-playwright'

const data = require('../Utils/Checkout.json')

export class Checkout {
    constructor(page) {
        this.page = page
        this.phone = page.locator("//a[text()='Phones']")
        this.phoneNokiaLumia1520 = page.locator("//a[text()='Nokia lumia 1520']")
        this.addtoCartButton = page.locator("//a[@onclick='addToCart(2)']")
        this.cartTab = page.locator('#cartur')
        this.placeOrderButton = page.locator("//button[text()='Place Order']")
        this.placeOrderName = page.locator('#name')
        this.placeOrderCountry = page.locator('#country')
        this.placeOrderCity = page.locator('#city')
        this.placeOrderCreditCard = page.locator('#card')
        this.placeOrderMonth = page.locator('#month')
        this.placeOrderYear = page.locator('#year')
        this.purchaseButton = page.locator("//button[text()='Purchase']")
        this.successfulPurchaseMessage = page.locator("//h2[text()='Thank you for your purchase!']")
        this.okButton = page.locator("//button[@class='confirm btn btn-lg btn-primary']")
        this.monitors = page.locator("//a[text()='Monitors']")
        this.appleMonitor24 = page.locator("//a[text()='Apple monitor 24']")
        this.addToCartMonitor = page.locator("//a[@onclick='addToCart(10)']")

    }

    async SelectPhone() {
        await this.phone.click()
        await this.phoneNokiaLumia1520.click()
    }


    async AddPhoneToCart() {
        await this.addtoCartButton.click()
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Product added.')
            await dialog.accept()
        })
    }

    async GoToCart() {
        await this.cartTab.click()
    }

    async PlaceOrder() {
        await this.placeOrderButton.click()
    }

    async FillPlaceOrderForm() {
        const nameValue = data.placeOrderName
        await this.placeOrderName.fill(nameValue)
        const countryValue = data.placeOrderCountry
        await this.placeOrderCountry.fill(countryValue)
        const cityValue = data.PlaceOrderCity
        await this.placeOrderCity.fill(cityValue)
        const cardValue = data.placeOrderCardNumber
        await this.placeOrderCreditCard.fill(cardValue)
        const monthValue = data.placeOrderMonth
        await this.placeOrderMonth.fill(monthValue)
        const yearValue = data.placeOrderYear
        await this.placeOrderYear.fill(yearValue)
    }

    async Purchase() {
        await this.purchaseButton.click()
    }

    async assertionPurchaseSuccessful() {
        await expect(this.successfulPurchaseMessage).toHaveText('Thank you for your purchase!')
        await this.okButton.click()
    }

    async SelectMonitor() {
        await this.monitors.click()
        await this.appleMonitor24.click()
    }

    async addMonitorToCart() {
        await this.addToCartMonitor.click()
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Product added.')
            await dialog.accept()
        })
    }

}