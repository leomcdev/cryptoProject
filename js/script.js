// checks form misspellings etc
'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

/*
document.addEventListener("DOMContentLoaded", function(event)) {
    // count clicks
    if (window.ethereum) {
        ethereum.request({ method: "eth_requestAccounts"})
        .then(() => document.getElementById("count").click())
        .catch((err) => console.error(err.message));
        ethereum.on("chainChanged", () => window.location.reload());
        ethereum.on("accountsChanged", (accounts) => {

        }
    }
    else {
        console.error("Install Metamask");
    }
}
*/ 