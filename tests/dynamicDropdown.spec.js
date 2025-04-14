import {test, expect} from '@playwright/test'

test('Dynamicdropdown', async({page}) =>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
await page.locator('#autocomplete').fill('ind')

const locat= await page.locator("//li[@class='ui-menu-item']")
await locat.first().waitFor();

let text=await locat.allTextContents()

for(let i=0; i<=text.length; i++ ){
 if(text[i]==="India"){
  await  locat.nth(i).click()
 }

}
await page.pause()
})


