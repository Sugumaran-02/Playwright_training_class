import { test,expect } from "@playwright/test";

test('Keyboard action', async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

  const text_box1=  await page.locator("//textarea[@name='text1']");

  await text_box1.click()
  text_box1.fill('Type ')
  await page.waitForTimeout(1000);
  await page.keyboard.type('Automation')
  await page.keyboard.down('Shift')
  await page.keyboard.press('T')
  await page.keyboard.press('E')
  await page.keyboard.press('S')
  await page.keyboard.press('T')
  await page.keyboard.press('I')
  await page.keyboard.press('N')
  await page.keyboard.press('G')
await page.keyboard.up('Shift')

await page.keyboard.press('Control+A')
await page.keyboard.press('Control+C')
await page.keyboard.press('Tab')
await page.keyboard.press('Control+V')



await page.waitForTimeout(4000);

})