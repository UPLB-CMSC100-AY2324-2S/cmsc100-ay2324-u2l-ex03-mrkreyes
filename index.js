/**
 * Simulator of a Password Validation Program
 * 
 * This module provides functions to validate and store passwords.
 * */

const pw1 = "Pass1234";
const pw2 = "Pass1234";
const username = "John";

// FUNCTION 1: Validates passwords for equality, length, and character requirements.
function validatePassword(pw1, pw2){

    // checks if passwords are not equal
    if (pw1 !== pw2 && pw2 !== pw1){
        console.log("Wrong Password!");
        return false;
    }

    // checks if password length is less than 8
    if (pw1.length < 8){
        console.log("Insuficient Number of Strings!");
        return false;
    }

    // flags
    let theresNumber = false;
    let theresUppercase = false;
    let theresLowercase = false;

    // checks for the presence of at least 1 number, 1 uppercase letter, and 1 lowercase letter
    for (let i = 0; i < pw1.length; i++){
        // charAt(): retrieves the character at a specified index within a string
        const character = pw1.charAt(i);
        if (character >= '0' && character <= '9') {
            theresNumber = true;
        } else if (character === character.toUpperCase() && character !== character.toLowerCase()) {
            theresUppercase = true;
        } else if (character === character.toLowerCase() && character !== character.toUpperCase()) {
            theresLowercase = true;
        }
    }

    // if any requirements are not met, prompts an error message
    if  (!theresNumber || !theresUppercase || !theresLowercase) {
        console.log("Invalid Password!")
        return false;
    }

    // return true if all validation checks pass
    return theresNumber && theresUppercase && theresLowercase;
}

// FUNCTION 2: Reverses a given password.
function reversePassword(pw){
    // initial string
    let reversedPw = '';

    // this iterates through the password characters in reverse order and concatenate them
    for (let i = pw.length - 1; i >= 0; i--){
        reversedPw += pw[i];
    }
    // returns reversed password
    return reversedPw;
}

// FUNCTION 3: Validates and stores the reversed password along with the username.
function storePassword(name, pw1, pw2){
    // calls the FUNCTION 1 to check if the password validation is successful
    if (validatePassword(pw1,pw2)){
        // object
        const storedPw = {
            name: name,
            newpasword: reversePassword(pw1)
        };
        // log the stored password object
        console.log(storedPw);
    }
}

// USAGE
storePassword(username,pw1,pw2);