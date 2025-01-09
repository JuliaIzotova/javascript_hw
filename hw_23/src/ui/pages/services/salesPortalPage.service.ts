import { GetTextMethod } from "../../../data/types/base.types";
import loginPage from "../login.page";


export abstract class SalesPortalPageService {
  private basePage = loginPage;
  async validateNotification(text: string, method: GetTextMethod = "with") {
    const notification = await this.basePage.getNotificationText(text, method);
    expect(notification).toBe(text);
  }
}