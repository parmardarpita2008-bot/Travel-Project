// JavaScript for Form Submission

document.getElementById("travelForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let name = document.getElementById("fullname").value;
    let place = document.getElementById("destination").value;
    let msgBox = document.getElementById("responseMsg");

   
    msgBox.className = "mt-3 text-center text-success fw-bold";
    msgBox.innerHTML = "Thank you " + name + "! Your inquiry for " + place + " has been submitted.";

    document.getElementById("travelForm").reset();
});
// Simple JS for booking form
        document.getElementById("bookingPageForm").addEventListener("submit", function(e) {
            e.preventDefault();
            let name = document.getElementById("name").value;
            let msg = document.getElementById("bookingMsg");
            msg.className = "mt-3 text-center text-success fw-bold";
            msg.innerHTML = "Thank you " + name + "! Your booking has been confirmed.";
            this.reset();
        });
        // Smooth Page Transition Animation
document.addEventListener("DOMContentLoaded", function () {
    
    document.body.classList.remove("fade-out");

    const links = document.querySelectorAll('a[href="booking.html"]');
    
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); 
            let targetUrl = this.getAttribute("href");

            document.body.classList.add("fade-out");

         
            setTimeout(function () {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});
