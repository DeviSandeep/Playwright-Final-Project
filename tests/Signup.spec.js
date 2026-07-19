import{test,expect} from '@playwright/test'
import { Signup } from '../Page/SignupPage'

test('Sign up for demo blaze site',async({page})=>{
    const signup=new Signup(page)
    await signup.goto()
    await signup.navigateToSignup()
    await signup.SignupCredential()
    await signup.assertionSignupSuccessful()
})

test('To close the signup page after entering the credentials',async({page})=>{
    const close=new Signup(page)
    await close.goto()
    await close.navigateToSignup()
    await close.SignupCredential()
    await close.close()
    await close.assertionBackToHomePage()
})