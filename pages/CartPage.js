export class CartPage {
  constructor(page) {
    this.page = page

    // Cart items
    this.cartProducts = page.locator('.cartSection h3')
    this.checkoutButton = page.locator('button:has-text("Checkout")')
  }

  async waitForCartToLoad() {
    await this.cartProducts.first().waitFor()
  }

  async verifyProductInCart(productName) {
    const count = await this.cartProducts.count()

    for (let i = 0; i < count; i++) {
      const name = await this.cartProducts.nth(i).textContent()
      if (name.trim() === productName) {
        return true
      }
    }
    return false
  }

  async proceedToCheckout() {
    await this.checkoutButton.click()
  }
}
