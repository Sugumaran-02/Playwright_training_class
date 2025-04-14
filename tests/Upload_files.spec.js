import { test, expect} from '@playwright/test'

test('Upload file', async({page})=>{

    
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#singleFileInput').setInputFiles("Inputfiles/loving-1207568.jpg");
    await page.locator('//*[@id="singleFileForm"]/button').click();


     const text1= await page.locator('#singleFileStatus').innerText();
    expect(text1).toContain('Single file selected')


    await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/sugum/Downloads/polaroid-3130379_1920.jpg", "C:/Users/sugum/Downloads/friends-5113875.jpg"])

    await page.locator('//*[@id="multipleFilesForm"]/button').click()

    const text2= await page.locator('#multipleFilesStatus').innerText();
    expect(text2).toContain('Multiple')


    await page.locator('#multipleFilesInput').setInputFiles([]) 
    await page.locator('//*[@id="multipleFilesForm"]/button').click()
    const text3= await page.locator('#multipleFilesStatus').innerText();
    expect(text3).toContain('No files')

    await page.pause()

})