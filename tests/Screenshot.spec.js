import {test, expect} from '@playwright/test'

test('ScreenshotExp', async({page}) =>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

   // await page.screenshot({path: "tests/Screenshot/"+"screenshot01.png"}) //screenshot only displayed page

  //  await page.screenshot({path: "tests/Screenshot/"+"fullpage.png", fullPage:true}) // for capturing the fullpage screenshot

 await page.locator("//table[@id='product' and @name='courses']").screenshot({path:"tests/Screenshot/"+"particular_elemnt.png"}) // for capture the particular element

})