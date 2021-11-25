function changeTheme(){
    document.querySelector("body").classList.toggle("dark");
}

function viewImage(destination, original) {
    document.getElementById(destination).src = original.src;
    document.getElementById(destination).alt = original.alt;
    document.getElementById(destination + '-caption').innerHTML = original.alt;

}