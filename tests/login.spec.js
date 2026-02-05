import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/Loginpage'

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.login('kumareshcl@gmail.com', 'Password@123')
  await page.locator('.card-body').first().waitFor()
  await expect(page).toHaveURL(/dashboard/)
})
