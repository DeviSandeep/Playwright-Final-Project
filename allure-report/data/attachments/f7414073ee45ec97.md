# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.js >> Place Order for Phone and Checkout
- Location: tests\Checkout.spec.js:23:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Test source

```ts
  1  | import { Login } from "../Page/LoginPage";
  2  | import { Checkout } from "../Page/CheckoutPage";
  3  | import { test, expect } from '@playwright/test'
  4  | import { log } from "node:console";
  5  | let login
  6  | let checkout
  7  | 
  8  | test.beforeEach(async ({ page }) => {
  9  |     login = new Login(page)
  10 |     await login.goto()
  11 |     await login.navigateToLogin()
  12 |     await login.validLogin()
  13 | })
  14 | 
> 15 | test.afterEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  16 |     await checkout.GoToCart()
  17 |     await checkout.PlaceOrder()
  18 |     await checkout.FillPlaceOrderForm()
  19 |     await checkout.Purchase()
  20 |     await checkout.assertionPurchaseSuccessful()
  21 | })
  22 | 
  23 | test('Place Order for Phone and Checkout', async ({ page }) => {
  24 | 
  25 |     checkout = new Checkout(page)
  26 |     await checkout.SelectPhone()
  27 |     await checkout.AddPhoneToCart()
  28 | })
  29 | 
  30 | test('Place Order for Monitor and Checkout', async ({ page }) => {
  31 |     checkout = new Checkout(page)
  32 |     await checkout.SelectMonitor()
  33 |     await checkout.addMonitorToCart()
  34 | 
  35 | })
  36 | 
```