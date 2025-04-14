import {test, expect} from '@playwright/test'


test ('@smoke Alert handle', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("alert")
console.log(" The popup name is "+ dialog.message());

await dialog.accept()
    })


    await page.locator("#alertBtn").click()
    await page.pause()

})

test ('@smoke Confirm alert handle', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("confirm")
console.log(" The popup name is "+ dialog.message());

await dialog.dismiss()
    })


    await page.locator("#confirmBtn").click()
    await page.pause()

})

test('Prompt alert', async({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/')

page.on('prompt', async prompt=>{

expect(prompt.type()).toContain('prompt')
console.log(" The popup name is "+ prompt.message());

prompt.accept('I am in a prompt')

})

await page.locator("#promptBtn").click()


})