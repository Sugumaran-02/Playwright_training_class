import {test, expect, chromium} from '@playwright/test'

test('Multipletabs', async() =>{

const browser= await chromium.launch({headless: false})
const context=await browser.newContext();
const page1=await context.newPage()

await page1.goto("https://www.snapdeal.com/")

await expect(page1).toHaveURL('https://www.snapdeal.com/')

const element1=await page1.locator('//*[@id="sdHeader"]/div[4]/div[2]/div/div[3]/div[3]')
await element1.click()

const page2= await context.newPage();

await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await expect(page2).toHaveTitle('OrangeHRM')
await page2.locator('//input[@name="username"]').fill('Admin')
await page2.locator('//input[@name="password"]').fill('admin123')
await page2.locator("//button[@type='submit']").click()

await page1.waitForTimeout(2000)
await page2.waitForTimeout(2000)

})