import{test,expect} from '@playwright/test'
import{ Login } from '../Page/LoginPage'
import { AddToCart } from '../Page/AddToCartPage'

test("To add Item Samsung Galaxy S6",async({page})=>{
    const login=new Login(page)
    const add=new AddToCart(page)
    await login.goto()
    await login.navigateToLogin()    
    await login.validLogin()
    await add.AddProductSamsungGS6()
    await add.assertionItemAddedSuccessfully()
})