import { Login } from "../Page/LoginPage";
import { Checkout } from "../Page/CheckoutPage";
import { test, expect } from '@playwright/test'
import { log } from "node:console";
let login
let checkout

test.beforeEach(async ({ page }) => {
    login = new Login(page)
    await login.goto()
    await login.navigateToLogin()
    await login.validLogin()
})

test.afterEach(async ({ page }) => {
    await checkout.GoToCart()
    await checkout.PlaceOrder()
    await checkout.FillPlaceOrderForm()
    await checkout.Purchase()
    await checkout.assertionPurchaseSuccessful()
})

test('Place Order for Phone and Checkout', async ({ page }) => {

    checkout = new Checkout(page)
    await checkout.SelectPhone()
    await checkout.AddPhoneToCart()
})

test('Place Order for Monitor and Checkout', async ({ page }) => {
    checkout = new Checkout(page)
    await checkout.SelectMonitor()
    await checkout.addMonitorToCart()

})
