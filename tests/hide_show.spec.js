 import {test, expect} from '@playwright/test'

 
test('hideandshow', async({page}) =>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.locator("#hide-textbox").click()
  const hiddenbox=  await page.locator("//input[@id='displayed-text']").isHidden()
  console.log("The hidden box is not visible " + hiddenbox);

  await page.locator("#show-textbox").click()
  const hiddenbox2=  await page.locator("//input[@id='displayed-text']").isVisible()
  console.log("The hidden box is visible " + hiddenbox2);
  
})


test('Test1 @smoke', async({page}) =>{
console.log(" test is passed ");

})

test('Test2 @smoke', async({page}) =>{
    console.log(" test2 is passed ");
    
    })

    test('Test3 @reg', async({page}) =>{
        console.log(" test3 is passed ");
        
        })
        
        test('Test4 @reg', async({page}) =>{
            console.log(" test4 is passed ");
            
            })        
         
            test('Test5 @smoke@reg', async({page}) =>{
                console.log(" test5 is passed ");
                
                })         