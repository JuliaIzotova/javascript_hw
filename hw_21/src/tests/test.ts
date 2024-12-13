import * as selectors from "../data/selectors";
import * as messages from "../data/messages";

describe("Dynamic controls", async () => {

  before(async function () {
    await browser.maximizeWindow();
    });
    
  beforeEach(async function () {
      await browser.url("https://the-internet.herokuapp.com/");
    });

    it('display header', async function () {
      await $(selectors.linkSelector("dynamic_controls")).click();
      await $(selectors.buttonRemoveOrAddCheckboxSelector).waitForDisplayed();
      const actualText = await $(selectors.headerSelector).getText();
      expect(actualText).toContain(messages.header);
  });

  it('check checkbox', async function () {
    await $(selectors.linkSelector("dynamic_controls")).click();
    await $(selectors.checkboxSelector).waitForDisplayed();
    await $(selectors.checkboxSelector).click();
    await expect($(selectors.checkboxSelector)).toBeChecked();
});

it('remove and return checkbox', async function () {
  await $(selectors.linkSelector("dynamic_controls")).click();
  await $(selectors.buttonRemoveOrAddCheckboxSelector).click();
  await $(selectors.checkboxSelector).waitForDisplayed({
    timeout: 5000,
      interval: 300,
      timeoutMsg: `Example 1 element does not exist after 5 seconds`,
      reverse: true,
    });
  const actualText = await $(selectors.messageSelector).getText();
  expect(actualText).toContain(messages.message2);
  await $(selectors.buttonRemoveOrAddCheckboxSelector).click();
  await $(selectors.buttonRemoveOrAddCheckboxSelector).waitForDisplayed();
  const actualText1 = await $(selectors.messageSelector).getText();
  expect(actualText1).toContain(messages.message1);

});
it('check subheader', async function (){
  await $(selectors.linkSelector("dynamic_controls")).click();
    await waitForElementWithText(selectors.subheader, "Remove/add", 5000);
});
});

async function waitForElementWithText(selector: string, text: string, timeout: number) {
  await browser.waitUntil(
      async () => {
          const isDisplayed = await $(selector).isDisplayed();
          const actualText = (await $(selector).getText()).trim();
          const isCorrectText = actualText === text;
          if (!isCorrectText) {
            throw new Error(`Element ${selector} actual text is ${actualText}, not ${text}`);
        }
          return isCorrectText && isDisplayed;
      },
      {
        timeout: timeout,
        timeoutMsg: `Element ${selector} wasn't present within timeout ${timeout}ms interval`,
        interval: 500,
      });
}

