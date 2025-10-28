
function toggleAside() {
    let aside = document.getElementsByTagName("aside")
        if (aside.style.display === "flex") {
            aside.style.display = "block";
        } else {
            aside.style.display = "none";
        }
}