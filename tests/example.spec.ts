 import { test, expect } from '@playwright/test';

 test("title google",async({page})=>{
  await page.goto("https://www.google.com");
    const pageTitle=page.title();
    await expect(page).toHaveTitle(/Google/);
 });
 
 




































































// const { test, expect } = require("@playwright/test");
//  import { LoginPage } from '.../pages/LoginPage';

// test("validating the login page",async({page})=>{
// await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//  await page.getByPlaceholder("Username").type("Admin")
//  await page.locator('input[name="password"]').type("admin123")
//  await page.locator('//button[@type="submit"]').click()
//  await expect(page).toHaveURL(/dashboard/);
// })

//  test("validate the log in form",async({page})=>{
//   //navigate the website
//   await page.goto("https://www.demoblaze.com/")
//  //click on login button

//  await page.locator("#login2").click();
//  //provide the username
//    await page.fill("#loginusername", "pavanol");
//  //provide the password
//  await page.fill("#loginpassword","test@123")
//  //click on log in button
//  await page.click("(//button[normalize-space()='Log in'])")
//  //click on the log out button
//  const webLink=await page.locator("(//a[normalize-space()='Log out'])")
//  await expect(webLink).toBeVisible();
//  })

// test("locate an elemnt", async ({ page }) => {
//   await page.getByAltText("company-branding"); 
//   await page.getByPlaceholder("Username").type("Admin");
//   await page.locator('input[name="password"]').type("admin123");
//   await page.getByRole("button", { type: "submit" }).click();
//   await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
//   await expect(await page.getByText(name)).toBeVisible();
// });


// const {test,expect}=require('@playwright/test')

// test("builtin-locators",async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     const logo=await page.getByAltText('company-branding');
//     await expect(logo).toBeVisible();
//     await page.getByPlaceholder('Username').fill("Admin")
//     await page.getByPlaceholder('Password').fill("admin123");
//     await page.getByRole('button',{type:'submit'}).click();
// });
 

 
 
 
