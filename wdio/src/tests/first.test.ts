interface ILogged {
    title: string;
    subheader: string;
    button: string;
}

describe('[UI] Login', () => {
    const validUserName = 'tomsmith';
    const validUserPassword = 'SuperSecretPassword!';

    const loginLinkSelector = 'a[href="/login"]';
    const passwordInputSelector = '#password'; // //input=[@id='password']
    const usernameInputSelector = '#username';
    const loginButtonSelector = '//button[@type="submit"]';
    const loginNotificationSelector = '#flash'; //*[id='flash']
    const successNotification = 'You logged into a secure area!';
  
    const loggedPageSelectors: ILogged = {
        title:"h2",
        subheader:".subheader", //*[@class="subheader"]
        button: '.button',
    };
    const loggedPageData: ILogged = {
        title: "Secure Area",
        subheader: "Welcome to the Secure Area. When you are done click logout below.",
        button: "Logout",
    };


    before(async function () {
        await browser.maximizeWindow();
        
    });

    beforeEach(async function () {
        await browser.url('https://the-internet.herokuapp.com/');
        const loginLink = await $(loginLinkSelector);
        await loginLink.click();
    });

    it('Login with valid credentials', async function () {
        await $(usernameInputSelector).setValue(validUserName);
        await $(passwordInputSelector).setValue(validUserPassword);
        await $(loginButtonSelector).click();
        const actualText = await $(loginNotificationSelector).getText();
        expect(actualText).toContain(successNotification);
        // await browser.pause(5000);
    });

    it('should have valid page layout after successful login', async function() {
        await $(usernameInputSelector).setValue(validUserName);
        await $(passwordInputSelector).setValue(validUserPassword);
        await $(loginButtonSelector).click();
        const actualData: ILogged = {
            title: (await $((loggedPageSelectors.title)).getText()).trim(),
            subheader: await $(loggedPageSelectors.subheader).getText(),
            button: (await $(loggedPageSelectors.button).getText()).trim(),
        };
        expect(actualData).toMatchObject({...loggedPageData});
    });
})