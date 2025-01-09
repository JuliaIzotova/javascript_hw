import { MenuItemNames } from "../../data/types/home.types";
import { SalesPortalPage } from "./salesPortal.page";

class HomePage extends SalesPortalPage {
  readonly ["Menu Button"] = (menuItemName: MenuItemNames) => `[name="${menuItemName}"]`;
  readonly ["Welcome label"] = ".welcome-text";
  readonly ['User Icon'] = '#dropdownUser1'
  async clickOnMenuButton(menuItemName: MenuItemNames) {
    await this.click(this["Menu Button"](menuItemName));
  }

  async waitForPageOpened(): Promise<void> {
    await this.waitForDisplayed(this["Welcome label"]);
    await this.waitForSpinnersToBeHidden("Home");
  }
  async getUserName(){
    return await this.getText(this['User Icon'])
  }

}

export default new HomePage();