import { test, expect  } from "@playwright/test";
import { url } from "inspector";


test('Frames pratice', async ({page}) =>{
 await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

const allframes= await page.frames();
console.log("The number of frames located in a page are " + allframes.length);

const iframe1= page.frame({url:'https://rahulshettyacademy.com/'})

await iframe1.click("(//a[contains(text(),'Courses')])[1]")


await page.waitForTimeout(4000)
})

test('Nestedframes', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

  let frame1= await page.frame({url: 'frame_1.html'})
  
await  frame1.locator('//*[@id="id1"]/div/input').click()
  
//  let childframe=await frame1.childFrames();

// await childframe.locator('//*[@id="i6"]/div[3]/div').click()

await page.pause()


})