export class DashboardPage {
  constructor(page) {
    this.page = page

    // Locators
    this.cartLink = page.locator("[routerlink='/dashboard/cart']")
    this.ordersLink = page.locator("[routerlink='/dashboard/myorders']")
    this.products = page.locator('.card-body')
  }
  async waitForPageToLoad() {
    await this.products.first().waitFor({ state: 'visible' })
  }

  
  async goToCart() {
    await this.cartLink.click()
  }

  async goToOrders() {
    await this.ordersLink.click()
  }

  async addProductToCart(productName) {
    const count = await this.products.count()

    for (let i = 0; i < count; i++) {
      if (await this.products.nth(i).locator('b').textContent() === productName) {
        await this.products.nth(i).locator('text=Add To Cart').click()
        break
      }
    }
  }
}
