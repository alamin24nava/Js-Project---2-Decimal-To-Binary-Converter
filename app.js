const submitBtn = document.getElementById('sub');
let alert = document.querySelector('.alert');
alert.style.display = 'none';

function decimalBinary(event) {
    event.preventDefault();
    let decimalNumber = document.querySelector('#desimalNumber').value;
    if (decimalNumber == '' || decimalNumber < 0) {
        document.querySelector('.alert').innerHTML = 'Enter Your Decimal Number !';
        alert.style.display = 'block';
    } else {
        binary = Number(decimalNumber).toString(2);
        document.querySelector('.result').innerHTML = `Binary No = ${binary}`;
        alert.style.display = 'none';

    }
}
submitBtn.addEventListener('click', decimalBinary);