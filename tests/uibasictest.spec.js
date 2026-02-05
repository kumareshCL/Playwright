const {test,expect} = require('@playwright/test');

test('pilot' ,async({page}) =>
{
  // const condition =  await browser.newContext();
  // const page = await condition.newPage();
await page.goto("https://www.youtube.com/watch?v=OXHTlMPbX7o&list=RDVt2CiopGsnM&index=2");
});

test ('nof ', async({browser})=>
{
    const condition =  await browser.newContext();
    const page = await condition.newPage();
    await page.goto("https://www.hotstar.com/in/home");
    console.log(await page.title());
    await expect(page).toHaveTitle(/JioHotstar/);
})

test ('locators', async({page})=>
{
    const Username = page.locator('#username');
    const signin = page.locator("#signInBtn");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//await expect(page).toHaveTitle(/LoginPage Pracise/);
await Username.fill("rahulshetty");
await page.locator("[type = 'password']").fill("learning");
await signin.click();
console.log (await page.locator("[style*='block']").textContent());
await Username.fill("");
await Username.fill("rahulshettyacademy");
await signin.click();
console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth(2).textContent());

})

test.only ('register', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    await page.locator("a[routerlink='/auth/register']").click();
   // await expect(page.locator('#firstname')).toBeVisible();
   await page.getByLabel('First Name').fill('kumaresh');
   //await page.locator("#firstname").fill("kumaresh");
    await page.getByLabel("lastName").fill("cl");
    await page.getByLabel("userEmail").fill("kumareshcl@gmail.com");
    await page.getByLabel("userMobile").fill("7530092357");
    await page.getByLabel("formcontrolname='occupation']").selectOption("Doctor");
    await page.getByLabel("#userPassword").fill("Jikikum@16");
    await page.getByLabel("#confirmPassword").fill("Jikikum@16");
    await page.getByLabel("Formcontrolname='required']").check();
    await page.getByLabel("#register").click();

   







})