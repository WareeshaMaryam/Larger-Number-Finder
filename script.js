function result() {
    let input = parseInt(prompt("Enter 1st Number"));
    let data = parseInt(prompt("Enter 2nd Number"));
    let message = document.getElementById("message");
    let error = document.getElementById("error");

    if (isNaN(input) || isNaN(data)) {
        error.textContent = `Please enter a valid number`;
    } else if (input === data) {
        message.textContent = `both numbers ${input} and ${data} are equal`;
    } else if (input > data) {
        message.textContent = ` ${input} is greater than ${data} `;
    } else if (input < data) {  
        message.textContent = `${data} is greater than ${input}`;
    }
    else {
        error.textContent = "Enter the number again`";
    }
}
