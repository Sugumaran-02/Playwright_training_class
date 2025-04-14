import {test, expect} from '@playwright/test'

test.skip('login test', async({page}) =>{

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   await page.locator('//input[@name="username"]').fill("Admin");
   await page.locator('//input[@name="password"]').fill("admin123")
   await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()
   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
   await expect(page).toHaveTitle('OrangeHRM')
   await expect(page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[4]/div/div[1]/div/p')).toBeVisible()
   await expect(page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[4]/div/div[1]/div/p')).toContainText('Buzz Latest Posts')
   //await page.getByPlaceholder('Search').fill('sin')
   
   //await expect(page.getByPlaceholder('Search')).toBeEmpty();
  // await expect(page.getByPlaceholder('Search')).toBeEnabled();
 // await expect(page.getByPlaceholder('Search')).toBeDisabled();
 //await expect(page.getByPlaceholder('Search')).toHaveValue('sin');
 
 await expect(page.getByPlaceholder('Search')).toHaveId();
 

   //Buzz Latest Posts

})


test.skip('pratice radio', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='male']").check()
   // expect (page.locator("//input[@id='male']")).toBeChecked()
  // expect (page.locator("//input[@id='male']")).toBeDisabled();
   
})

test.skip('pratice check', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const locator= await page.$$("//input[@type='checkbox' and @class='form-check-input']")

    for (const select of locator){
        await select.click()
        }

       for (const select of locator) {
        if(await expect(select).toBeChecked){
            await select.uncheck();
        }
       }

    
   
})



test.skip('pratice check2', async({page}) =>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
     const locator= await page.$$("//input[@type='checkbox']")

    for (const select of locator){
        await select.scrollIntoViewIfNeeded()
        await select.check();
        }

       for (const select of locator) {
        if(await expect(select).toBeChecked){
            await select.uncheck();
        }
       }

    
   
})

test.skip('pratice dropdown', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator("//select[@id='country']").selectOption({label:"Canada"})
  await page.locator("//select[@id='country']").selectOption({value:"canada"})
  await page.selectOption("//select[@id='country']", "india")

  const listofoption= await page.$$("//select[@id='country']/option")

//   console.log("Dropdown count", listofoption.length)
//  await expect(listofoption.length).toBe(10)
      

for (const country of listofoption) {
const countryname=await country.textContent();
    if(countryname.includes("Canada")){
        console.log("Country name is" + countryname)
    }
    
}

   await page.waitForTimeout(4000);
})


test.skip('Multi_select_option', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//select[@id='colors']").selectOption(['Red', 'Blue', 'Yellow']);

   
    await page.waitForTimeout(4000);
    
})


