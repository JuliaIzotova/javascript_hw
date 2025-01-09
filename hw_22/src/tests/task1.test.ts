import {
    NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES,
    NEGATIVE_REGISTRATION_TEST_DATA,
    NEGATIVE_LOGIN_TEST_DATA,
  } from "../data/register-data";
  
  describe("[UI] Karpovich Demo Login And Registration Form", () => {
    const usernameInputSelectorOnRegistration = "#userNameOnRegister";
    const passwordInputSelectorOnRegistration = "#passwordOnRegister";
    const passwordInputSelectorOnLogin = "#password";
    const usernameInputSelectorOnLogin = "#userName";
    const registerButtonSelectorOnLogin = "#registerOnLogin";
    const registerButtonSelectorOnRegistration = "#register";
    const backButtonSelector = "#backOnRegister";
    const submitButtonSelector = "#submit";
    const errorMessageOnRegistrationSelector = "#errorMessageOnRegister";
    const errorMessageOnLoginSelector = "#errorMessage";
    const formSelector = ".registerForm";
  
    context("Register form negative scenarios", async function () {
      beforeEach(async function () {
        await browser.url("https://anatoly-karpovich.github.io/demo-login-form/");
        await $(registerButtonSelectorOnLogin).click();
      });
  
      afterEach(async function () {
        await browser.execute(() => {
          localStorage.clear();
        });
      });
  
      NEGATIVE_REGISTRATION_TEST_DATA.forEach(
        ({ username, password, description, errorMessage }) => {
          it(`Should not register with ${description}`, async function () {
            await $(usernameInputSelectorOnRegistration).setValue(username);
            await $(passwordInputSelectorOnRegistration).setValue(password);
            await $(registerButtonSelectorOnRegistration).click();
            await expect($(errorMessageOnRegistrationSelector)).toHaveText(
              errorMessage
            );
          });
        }
      );
  
      it("Should not register with 41 characters in username", async function () {
        await browser.execute(async function () {
          const username = document.getElementById("userNameOnRegister");
          username?.removeAttribute("maxlength");
        });
        const form = $(formSelector);
        await form
          .$(usernameInputSelectorOnRegistration)
          .setValue("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        await form.$(passwordInputSelectorOnRegistration).setValue("Qw345678");
        await form.$(registerButtonSelectorOnRegistration).click();
        await expect(form.$(errorMessageOnRegistrationSelector)).toHaveText(
          NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.LONG_USERNAME
        );
      });
  
      it("Should not register with 21 characters in password", async function () {
        await browser.execute(async function () {
          const username = document.getElementById("passwordOnRegister");
          username?.removeAttribute("maxlength");
        });
        const form = $(formSelector);
        await form.$(usernameInputSelectorOnRegistration).setValue("aaa");
        await form
          .$(passwordInputSelectorOnRegistration)
          .setValue("Qw3456789012345678901");
        await form.$(registerButtonSelectorOnRegistration).click();
        await expect(form.$(errorMessageOnRegistrationSelector)).toHaveText(
          NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.LONG_PASSWORD
        );
      });
  
      it("Should not register user for second time with valid data", async function () {
        const successMessageOnRegistration =
          "Successfully registered! Please, click Back to return on login page";
        await $(usernameInputSelectorOnRegistration).setValue("aaa");
        await $(passwordInputSelectorOnRegistration).setValue("Qw345678");
        await $(registerButtonSelectorOnRegistration).click();
        await expect($(errorMessageOnRegistrationSelector)).toHaveText(
          successMessageOnRegistration
        );
        await $(backButtonSelector).click();
        await $(registerButtonSelectorOnLogin).click();
        await $(usernameInputSelectorOnRegistration).setValue("aaa");
        await $(passwordInputSelectorOnRegistration).setValue("Qw345678");
        await $(registerButtonSelectorOnRegistration).click();
        await expect($(errorMessageOnRegistrationSelector)).toHaveText(
          NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.USERNAME_IN_USE
        );
      });
    });
  
    context("Login form negative scenarios", async function () {
      NEGATIVE_LOGIN_TEST_DATA.forEach(
        ({ username, password, description, errorMessage }) => {
          it(`Should not login with ${description}`, async function () {
            await browser.url(
              "https://anatoly-karpovich.github.io/demo-login-form/"
            );
            await $(usernameInputSelectorOnLogin).setValue(username);
            await $(passwordInputSelectorOnLogin).setValue(password);
            await $(submitButtonSelector).click();
            await expect($(errorMessageOnLoginSelector)).toHaveText(errorMessage);
          });
        }
      );
    });
  });