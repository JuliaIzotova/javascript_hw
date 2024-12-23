interface INegativeRegisterAndLoginTestData {
    username: string;
    password: string;
    description: string;
    errorMessage: string;
  }
  export enum NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES {
    SHORT_USERNAME = "Username should contain at least 3 characters",
    SHORT_PASSWORD = "Password should contain at least 8 characters",
    BOTH_INVALID_USERNAME_AND_PASSWORD = "Please, provide valid data",
    LONG_USERNAME = "Username can't exceed 40 characters",
    LONG_PASSWORD = "Password can't exceed 20 characters",
    PRE_AND_POST_SPACES_IN_USERNAME = "Prefix and postfix spaces are not allowed is username",
    LETTERS_IN_PASSWORD_IN_UPPER_CASE = "Password should contain at least one character in lower case",
    LETTERS_IN_PASSWORD_IN_LOWER_CASE = "Password should contain at least one character in upper case",
    USERNAME_IN_USE = "Username is in use",
    USERNAME_IS_REQUIRED = "Username is required",
    PASSWORD_IS_REQUIRED = "Password is required",
    CREDENTIALS_ARE_REQUIRED = "Credentials are required",
    INVALID_CREDENTIALS = "Invalid credentials",
  }
  
  export const NEGATIVE_REGISTRATION_TEST_DATA: INegativeRegisterAndLoginTestData[] =
  [
    {
      username: "ju",
      password: "Test1234",
      description: "min username - 1",
      errorMessage: NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.SHORT_USERNAME,
    },
    {
      username: "jul",
      password: "Test123",
      description: "min password - 1",
      errorMessage: NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.SHORT_PASSWORD,
    },
    {
      username: "ju",
      password: "Test123",
      description: "min username and password - 1",
      errorMessage:
        NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.BOTH_INVALID_USERNAME_AND_PASSWORD,
    },
    {
      username: " jul ",
      password: "Test1234",
      description: "pre and post spases in username",
      errorMessage:
        NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.PRE_AND_POST_SPACES_IN_USERNAME,
    },
    {
      username: "   ",
      password: "Test1234",
      description: "only spases in username",
      errorMessage:
        NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.PRE_AND_POST_SPACES_IN_USERNAME,
    },
    {
      username: "jul",
      password: "TEST1234",
      description: "all letters in password in upper case",
      errorMessage:
        NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.LETTERS_IN_PASSWORD_IN_UPPER_CASE,
    },

    {
      username: "jul",
      password: "test1234",
      description: "all letters in password in lower case",
      errorMessage:
        NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.LETTERS_IN_PASSWORD_IN_LOWER_CASE,
    },
  ];

export const NEGATIVE_LOGIN_TEST_DATA: INegativeRegisterAndLoginTestData[] = [
  {
    username: "",
    password: "Test1234",
    description: "username is absent",
    errorMessage:
      NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.USERNAME_IS_REQUIRED,
  },
  {
    username: "jul",
    password: "",
    description: "password is absent",
    errorMessage:
      NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.PASSWORD_IS_REQUIRED,
  },
  {
    username: "",
    password: "",
    description: "credentials are absent",
    errorMessage:
      NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.CREDENTIALS_ARE_REQUIRED,
  },
  {
    username: "jul",
    password: "Helloworld123",
    description: "wrong password",
    errorMessage:
      NEGATIVE_REGISTER_AND_LOGIN_ERROR_MESSAGES.INVALID_CREDENTIALS,
  },
];