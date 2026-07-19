import { expect } from 'allure-playwright'

export class AddToCart{
    constructor(page){
        this.page=page
        this.productSamsunggalaxys6=page.locator("//a[text()='Samsung galaxy s6']")
        this.addToCartSG6=page.locator("//a[@onclick='addToCart(1)']")
    }

    async AddProductSamsungGS6(){
        await this.productSamsunggalaxys6.click()
        
    }

    async AddToCart(){
        await this.addToCartSG6.click()
    }

    async assertionItemAddedSuccessfully() {
            this.page.on('dialog', async dialog => {
                expect(dialog.message()).toBe('Product added.')
                await dialog.accept()
            })
            //await this.addToCartSG6.click()
        }
}