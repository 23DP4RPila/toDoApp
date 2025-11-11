
function toggleAside() {
    let aside = document.getElementsByTagName("img")
        while (true) {
            x = document.getElementsByTagName("aside")
            if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
              }
        } }