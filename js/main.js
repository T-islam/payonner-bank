//login section 
function displayAccount(){
    const account = document.getElementById('account-info');
    account.style.display ="block";
    const loginInfo = document.getElementById('logIn-section');
    loginInfo.style.display ="none";
}
const login = document.getElementById('login-button');
login.addEventListener('click',displayAccount);
//balance section

let balance = document.getElementById('balance').innerText;
let balanceNumber = parseFloat(balance); 
// balance deposit function
function depositAdd(){

const depositValue = document.getElementById('deposit').value;
const depositNumber = parseFloat(depositValue);
const depositBalance = document.getElementById('deposit-balance').innerText;
const depositBalanceNumber = parseFloat(depositBalance);
const total = depositNumber + depositBalanceNumber ;

document.getElementById('balance').innerText = total +balanceNumber;
document.getElementById('deposit-balance').innerText =total;
document.getElementById('deposit').value ='';
}
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', depositAdd);

// withdraw balance function
function withdrawFunction(){

    const withdrawValue = document.getElementById('withdraw').value;
    const withdrawNumber = parseFloat(withdrawValue);
    const withdrawBalance = document.getElementById('withdraw-balance').innerText;
    const withdrawBalanceNumber = parseFloat(withdrawBalance);
    const total = withdrawNumber + withdrawBalanceNumber ;
    
    document.getElementById('balance').innerText =balanceNumber - total;
    document.getElementById('withdraw-balance').innerText =total;
    document.getElementById('withdraw').value ='';
    }

    const withdrawBtn = document.getElementById('withdraw-btn');
    withdrawBtn.addEventListener('click', withdrawFunction);