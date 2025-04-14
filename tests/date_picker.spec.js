import {test, expect} from '@playwright/test'

test.skip('Datepicker', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('//*[@id="datepicker"]').fill('12/26/2002')

    await page.locator('//*[@id="datepicker"]').click()

    const date= "02"
    const month="March"
    const year= "2000"

    while(true){

const currentmonth= await page.locator("//span[@class='ui-datepicker-month']").textContent()
const currentyear= await page.locator("//span[@class='ui-datepicker-year']").textContent()

if(currentmonth==month && currentyear==year){
    break;
}

await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click()

    }


    await page.locator(`//a[@class='ui-state-default' and text()=${date}]`).click()

 await   page.pause()

})




test('calender_selector', async({page})=>{

const date= "2"
const month="Mar"
const year= "2026"
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#txtDate').click();
  await page.locator("//select[@class='ui-datepicker-month']").selectOption({label: month})
await page.locator("//select[@class='ui-datepicker-year']").selectOption({value: year})
await page.locator(`//a[@data-date=${date}]`).click()



await page.pause()

})

