import { validCredentials } from "../data/spinner-data";
import { aqaCourseSelectors } from "../data/spinner-data";

describe('[UI] wait for all spinners are hidden ', async function () {
    before(async function () {
        await browser.maximizeWindow();
        await browser.url("https://anatoly-karpovich.github.io/aqa-course-project/#");
      });

    it(`Should check all spinners`, async function () {
        await $(aqaCourseSelectors.emailSelector).setValue(validCredentials.email)
        await $(aqaCourseSelectors.passwordSelector).setValue(validCredentials.password)
        await $(aqaCourseSelectors.loginButtonSelector).click()
        
        const spinners = await $$(aqaCourseSelectors.spinnerSelector).getElements()
        await browser.waitUntil(async () => {
            const result = await spinners.every(async (spinner) => !(await spinner.isDisplayed()))
            console.log(result)
            return result
        },
        { 
            timeout: 30000, 
            timeoutMsg: "Спиннеры не исчезли за 30 секунд",
        })

        await $(aqaCourseSelectors.iconUser).waitForDisplayed()
        await expect($(aqaCourseSelectors.iconUser)).toHaveText('AQA User')
    })
})
