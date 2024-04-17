function validatePlaindrome(){
    const palindrome = document.getElementById('PAILINDROME').value;
    const palindromeConfirm = document.getElementById('PALINDROME CONFIRM').value;

    if(palindrome != palindromeConfirm){
        console.log("The passwords do not match");
        return;
    }
        console.log("Regisrtration successful");
        document.getElementById('validatePlaindrome').submit();
    }