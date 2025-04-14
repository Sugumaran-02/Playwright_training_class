import { test, expect, chromium} from '@playwright/test'

test('Multiplewindow', async () => {
 const browser=await chromium.launch()
 const context=await browser.newContext();
 const page1= await context.newPage();

await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

const newpage1= context.waitForEvent('page')

await page1.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[3]/div[2]/p[2]/a').click()


    await page1.waitForTimeout(3000)
})