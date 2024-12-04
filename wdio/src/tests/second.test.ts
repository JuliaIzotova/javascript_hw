describe("[UI] Karpovich Demo Login And Registration Form", () => {
    const usernameInputRegistrationSelector = "#userNameOnRegister"; //input[@id="userNameOnRegister"]
    const passwordInputRegistrationSelector = "#passwordOnRegister"; //input[@id="userNameOnRegister"]
    const confirmRegistrationButtonSelector = "#register";
    const buttonBackToLoginPageSelector = "#backOnRegister";
    
    const messageOnRegistrationSelector = "#errorMessageOnRegister";

    
    const usernameLoginSelector = "#userName";
    const passwordLoginSelector = "#password";
    const buttonLoginSubmitSelector = "#submit";
    const chooseRegistationSelector = "#registerOnLogin";

    const errorMessageOnLoginSelector = "#errorMessage";
    const successMessageLoginSelector = "#successMessage";
    // const buttonBacktoLoginPageSelector = "#backButton";

    const validUserName = "usertest";
    const validUserPassword = "Test123!";
    const invalidUsername = "julia";
    const invalidPassword = "mkslmckldc";

    const userName2letters = "te";
    const userName41letters = "testtesttesttesttesttesttestеsttesttestt";
    const userNameWithSpace = " testName123"
    // const userName40letters = "testtesttesttesttesttesttestеsttesttest";
    // const userName3letters = "tes";
    const passwordNoUpperCase = "test123!";
    const passwordOnlyUpperCase = "TESTTEST";
    const passwordLessEightSymbols = "testTes";
    const emptyUsername = "";
    const emptyPassword = "";


    const errorMessageOnLoginEmptyFields = "Credentials are required";
    const errorMessangeOnLoginInvalidCredentials = "Invalid credentials";
    const succesLogin = `Hello, ${validUserName}`!;
    const errorMessageOnRegistrationEmptyFields = "Please, provide valid data";
    const errorMessageOnRegistration2Letters = "Username should contain at least 3 characters";
    const errorMessageOnRegistration41Letters = "Maximum is 40 letters";
    const upperCaseErrorMessage = "Password should contain at least one character in upper case";
    const upperCaseErrorMessage2 = "Password should contain at least one character in lower case";
    const errorPasswordLessThenEightSymbols = "Password should contain at least 8 characters"
    const errorMessageOnRegistrationUserInUse = "Username is in use";
    const errorUsingSpacesInUsername = "Prefix and postfix spaces are not allowed is username"
    const successMessageRegistration = "Successfully registered! Please, click Back to return on login page"

beforeEach(async function () {
    await browser.url("https://anatoly-karpovich.github.io/demo-login-form/");
  });

   afterEach(async function () {
    await browser.execute(() => {
      localStorage.clear();
    });
  });

  it("Register valid username and password", async function() {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(validUserName);
    await $(passwordInputRegistrationSelector).setValue(validUserPassword);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText();
    expect(actualText).toContain(successMessageRegistration);
    await $(buttonBackToLoginPageSelector).click();
    });

  it("Error in registration: name less 3 letters", async function () {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(userName2letters);
    await $(passwordInputRegistrationSelector).setValue(validUserPassword);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText();
    expect(actualText).toContain(errorMessageOnRegistration2Letters);
    await $(buttonBackToLoginPageSelector).click();
    });

  xit("Error in registration: name more than 40 letters", async function () {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(userName41letters);
    await $(passwordInputRegistrationSelector).setValue(validUserPassword);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText();
    expect(actualText).toContain(errorMessageOnRegistration41Letters);
    await $(buttonBackToLoginPageSelector).click();
    });

  xit("Error when password field contains only lowercase letters", async function () {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(validUserName);
    await $(passwordInputRegistrationSelector).setValue(passwordNoUpperCase);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText()
    expect(actualText).toContain(upperCaseErrorMessage);
    await $(buttonBackToLoginPageSelector).click();
    });
  xit("Error when password field contains only uppercase letters", async function () {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(validUserName);
    await $(passwordInputRegistrationSelector).setValue(passwordOnlyUpperCase);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText()
    expect(actualText).toContain(upperCaseErrorMessage2);
    await $(buttonBackToLoginPageSelector).click();
    });

  it("Error in registration when User In Use", async function() {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(validUserName);
    await $(passwordInputRegistrationSelector).setValue(validUserPassword);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText();
    expect(actualText).toContain(successMessageRegistration);
    await $(confirmRegistrationButtonSelector).click();
    const actualText2 = await $(messageOnRegistrationSelector).getText();
    expect(actualText2).toContain(errorMessageOnRegistrationUserInUse);
    await $(buttonBackToLoginPageSelector).click();
    });

  it("Error in registrtion then password less 8 symbols", async function () {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(validUserName);
    await $(passwordInputRegistrationSelector).setValue(passwordLessEightSymbols);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText()
    expect(actualText).toContain(errorPasswordLessThenEightSymbols);
    await $(buttonBackToLoginPageSelector).click();
    });

    it("Error when empty field", async function () {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(emptyUsername);
    await $(passwordInputRegistrationSelector).setValue(emptyPassword);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText()
    expect(actualText).toContain(errorMessageOnRegistrationEmptyFields);
    await $(buttonBackToLoginPageSelector).click();   
    });

  it("Error when space in username", async function () {
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(userNameWithSpace);
    await $(passwordInputRegistrationSelector).setValue(validUserPassword);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText()
    expect(actualText).toContain(errorUsingSpacesInUsername);
    await $(buttonBackToLoginPageSelector).click();  
    });

  it("Successful login valid username and password", async function(){
    await $(chooseRegistationSelector).click();
    await $(usernameInputRegistrationSelector).setValue(validUserName);
    await $(passwordInputRegistrationSelector).setValue(validUserPassword);
    await $(confirmRegistrationButtonSelector).click();
    const actualText = await $(messageOnRegistrationSelector).getText();
    expect(actualText).toContain(successMessageRegistration);
    await $(buttonBackToLoginPageSelector).click();
    await $(usernameLoginSelector).setValue(validUserName);
    await $(passwordLoginSelector).setValue(validUserPassword);
    await $(buttonLoginSubmitSelector).click();
    const actualText3 = await $(successMessageLoginSelector).getText();
    expect(actualText3).toContain(succesLogin);
    });
   
  it("Error in login with empty fields", async function(){
    await $(buttonLoginSubmitSelector).click();
    const actualText = await $(errorMessageOnLoginSelector).getText();
    expect(actualText).toContain(errorMessageOnLoginEmptyFields);
  });

  it("Error when unregistered user", async function () {
    await $(usernameLoginSelector).setValue(invalidUsername);
    await $(passwordLoginSelector).setValue(invalidPassword);
    await $(buttonLoginSubmitSelector).click();
    const actualText = await $(errorMessageOnLoginSelector).getText();
    expect(actualText).toContain(errorMessangeOnLoginInvalidCredentials);
  });

});
