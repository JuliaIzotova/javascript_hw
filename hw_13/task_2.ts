function validatePassword(password: string): boolean {
    const trimmedPassword = password.trim();
    return trimmedPassword.length >= 8 && /[A-Z]/.test(trimmedPassword) && /[a-z]/.test(trimmedPassword) && /\d/.test(trimmedPassword) &&  !/\s/.test(trimmedPassword);
}

console.log(validatePassword('Password1')); 
console.log(validatePassword('password'));   
console.log(validatePassword('PASSWORD'));   
console.log(validatePassword('Pass1'));      
console.log(validatePassword('Pass word1')); 
console.log(validatePassword(' ')); 
console.log(validatePassword('12345678'));
console.log(validatePassword('   Password123'))      
