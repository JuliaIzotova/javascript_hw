import { IProduct } from "../../../data/types/products.types";
import addNewProductPage from "../products/addNewProduct.page";
import productsPage from "../products/products.page";
import { SalesPortalPageService } from "../services/salesPortalPage.service";

class AddNewProductService extends SalesPortalPageService {
  private addNewProductPage = addNewProductPage;
  private productsPage = productsPage;

  async populate(product: IProduct) {
    await this.addNewProductPage.fillInputs(product);
    await this.addNewProductPage.clickOnSaveButton();
    await this.productsPage.waitForPageOpened();
  }
}

export default new AddNewProductService();