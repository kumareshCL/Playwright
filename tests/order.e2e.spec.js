import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/Loginpage'
import { DashboardPage } from '../pages/DashboardPage'
import { CartPage } from '../pages/CartPage'

test('User can add product to cart and verify it', async ({ page }) => {
  const productName = 'ZARA COAT 3'

  const loginPage = new LoginPage(page)
  const dashboardPage = new DashboardPage(page)
  const cartPage = new CartPage(page)

  // Login
  await loginPage.goto()
  await loginPage.login(
    'kumareshcl@gmail.com','Password@123')

  // Dashboard
  await dashboardPage.waitForPageToLoad()
  await dashboardPage.addProductToCart(productName)
  await dashboardPage.goToCart()

  // Cart
  await cartPage.waitForCartToLoad()
  const isProductPresent = await cartPage.verifyProductInCart(productName)

  expect(isProductPresent).toBeTruthy()
})
