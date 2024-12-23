import { NOTIFICATIONS } from "../../data/notifications";
import { generateProductData } from "../../data/products/generateProducts"
import homePageService from "../pages/services/homePage.service";
import loginPageService from "../pages/services/loginPage.service";
import productsPageService from "../pages/services/productPage.service";
import addNewProductPageService from "../pages/services/addNewProduct.page.service";

//npm run test -- --spec="./src/ui/tests/test.ts"
// setTimeout(function() {debugger;}, 0) 

describe('[UI] [AQA course] e2e test', async function () {
    beforeEach(async function (){
        await loginPageService.openSalesPortal();
        await loginPageService.loginAsAdmin();
        await homePageService.openProductsPage();
        await productsPageService.openAddNewProductPage();
    })

    it(`Should create product with smoke data`, async function () {
        const newProductData = generateProductData();

        await addNewProductPageService.populate(newProductData);
        await productsPageService.validateNotification(NOTIFICATIONS.PRODUCT_CREATED);
        await productsPageService.checkProductInTable(newProductData);
    }) 

    it.only("Should delete created product", async function () {
        const newProductData = generateProductData();

        await addNewProductPageService.populate(newProductData);
        await productsPageService.validateNotification(NOTIFICATIONS.PRODUCT_CREATED);
        await productsPageService.deleteProduct(newProductData.name);
        await productsPageService.validateNotification(NOTIFICATIONS.PRODUCT_DELETED);
        // await browser.pause(5000)
    })
})