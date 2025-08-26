
document.getElementById("loginButton").addEventListener("click", function (e) {
    e.preventDefault()

    const phoneNumber = 1739145813;
    const pinNumber = 220023;

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)


    if (mobileNumberValueConverted === phoneNumber && pinNumberValueConverted === pinNumber) {

        window.location.href = "./home.html"
    }
    else {
        alert("Invalid Credential");
    }



})