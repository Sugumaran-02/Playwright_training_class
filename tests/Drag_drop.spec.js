import {test , expect} from '@playwright/test'

test('Drag and drop action', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    let dragelement= await page.locator('#draggable');

    let dropelemnt= await page.locator('#droppable');


    // await dragelement.hover();
    // await page.mouse.down();
    // await dropelemnt.hover();
    // await page.mouse.up();

    await dragelement.dragTo(dropelemnt)

    await page.waitForTimeout(4000)



})