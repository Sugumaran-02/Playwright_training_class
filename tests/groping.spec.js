import {test, expect} from '@playwright/test'


test.describe('Group1', ()=>{
    test('test1', async({page}) =>{
        console.log("The test1");
        })
        
     test('test2', async({page}) =>{
     console.log("The test2");
      })
  
})

test.describe('Group2', ()=>{
    test('test3', async({page}) =>{
        console.log("The test3");
        })

        test('test4', async({page}) =>{
            console.log("The test4");
            })

            test('test5', async({page}) =>{
                console.log("The test5");
                })

               test('test6', async({page}) =>{
                console.log("The test6");
                })
})

