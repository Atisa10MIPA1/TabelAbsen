if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.write("Sorry, we currently only support desktop.");
}

else {
    let password = "ilikepizza"
    let userInput = prompt("Masukan Password: ")
    
    while (userInput != password) {
        userInput = prompt("Password salah, coba lagi: ") 
    }
    
    window.location.href = "absent-table.html"
}