import { IProduct } from "../../../data/types/products.types"
import { SalesPortalPage } from "../salesPortal.page"

class AddNewProductPage extends SalesPortalPage {
    readonly Title = '//h2[normalize-space(.)="Add New Product"]';
    readonly ['Name input'] = '#inputName'
    readonly ['Manufacturer dropdown'] = '#inputManufacturer'
    readonly ['Price input'] = '#inputPrice'
    readonly ['Amount input'] = '#inputAmount'
    readonly ['Notes textarea'] = '#textareaNotes'
    readonly ['Save New Product Button'] = '#save-new-product'

    async waitForPageOpened() {
        await this.waitForDisplayed(this.Title)
        await this.waitForSpinnersToBeHidden('Products')
    }

    async fillInputs(product: IProduct){
        await this.setValue(this['Name input'], product.name)
        await this.selectDropdownValue(this['Manufacturer dropdown'], product.manufacturer)
        await this.setValue(this['Price input'], product.price)
        await this.setValue(this['Amount input'], product.amount)
        if (product.notes) {
            await this.setValue(this['Notes textarea'], product.notes)
        }
    }

    async clickOnSaveButton(){
        await this.click(this['Save New Product Button'])
    }
}

export default new AddNewProductPage()