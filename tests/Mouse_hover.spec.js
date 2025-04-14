import { test,expect } from "@playwright/test";

test('Keyboard action', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');
    const element_hover= page.locator("//button[@class='dropbtn']")

   await element_hover.hover()

  //await page.waitForTimeout(4000)
})

test.skip('Double click', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const text_box1= await page.locator("//input[@id='field1']");
    await text_box1.press('Control+A')
    await text_box1.press('Control+X')
    await text_box1.fill('Playwright pratice')
    
    const double_click_obj= page.locator("//button[contains(text(),'Copy Text')]")
   await double_click_obj.dblclick()
 await  page.waitForTimeout(4000)

})

test('Right click', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
   const rightcli_elemt= page.locator('[class="context-menu-one btn btn-neutral"]');
   //const rightcli_elemt= page.locator("/html/body/div/section/div/div/div/p/span");

 // await  rightcli_elemt.click({button:'right'})

  await page.waitForTimeout(4000)


  const Popup01 = await Promise.all([
   page.waitForEvent('popup'),       // Wait for popup to open
    page.click('[class="context-menu-one btn btn-neutral"]', { button: 'right' })
  //  page.click('/html/body/ul/li[2]')  // Action that triggers popup
  ]);

 // await page.locator('/html/body/ul/li[2]').click()

 await Popup01.waitForLoadState();
console.log(await Popup01.title());

  await page.waitForTimeout(4000)
  


})
