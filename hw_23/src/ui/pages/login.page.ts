import { ICredentials } from "../../data/types/login.types";
import { SalesPortalPage } from "./salesPortal.page";

class LoginPage extends SalesPortalPage {
    readonly ['Email input'] = '#emailinput'
    readonly ['Password input'] = '#passwordinput'
    readonly ['Login Button'] = 'button[type="submit"]'

    async waitForPageOpened(){
        await this.waitForDisplayed(this['Login Button'])
    }

    async fillCredentials(credentials: ICredentials) {
        await this.setValue(this["Email input"], credentials.email);
        await this.setValue(this["Password input"], credentials.password);
    }

    async clickOnLoginButton(){
        await this.click(this['Login Button'])
    }

    async open(){
        await this.openPage('/aqa-course-project/')
    }
} 

export default new LoginPage()