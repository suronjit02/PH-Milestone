
const handaleAdToStorage = () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

   localStorage.setItem(name, email)
}