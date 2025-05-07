document.addEventListener("DOMContentLoaded", function () {
   
    const createClinicBtn = document.getElementById("createClinicBtn");
    const clinicModal = document.getElementById("clinicModal");
    const confirmCreateClinic = document.getElementById("confirmCreateClinic");

    if (createClinicBtn) {
        createClinicBtn.addEventListener("click", function () {
            clinicModal.style.display = "flex";
        });
    }

    if (confirmCreateClinic) {
        confirmCreateClinic.addEventListener("click", function () {
            const clinicName = document.getElementById("clinicName").value.trim();
            if (clinicName === "") {
                alert("Please enter a clinic name!");
                return;
            }
            alert(`Clinic "${clinicName}" created successfully!`);
            clinicModal.style.display = "none";
        });
    }

    
    const doTestBtn = document.querySelector(".do-test-btn");
    if (doTestBtn) {
        doTestBtn.addEventListener("click", function () {
            alert("Redirecting to the test page...");
            
        });
    }

    
    const patientForm = document.getElementById("patient-form");
    if (patientForm) {
        patientForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("patient-email").value.trim();
            const password = document.getElementById("patient-password").value;

            if (!validateEmail(email)) {
                alert("Please enter a valid email!");
                return;
            }

            localStorage.setItem(email, JSON.stringify({ role: "patient", password }));
            alert("Patient registered successfully!");
            window.location.href = "login.html";
        });
    }

    
    const doctorForm = document.getElementById("doctor-form");
    if (doctorForm) {
        doctorForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("doctor-email").value.trim();
            const password = document.getElementById("doctor-password").value;

            if (!validateEmail(email)) {
                alert("Please enter a valid email!");
                return;
            }

            localStorage.setItem(email, JSON.stringify({ role: "doctor", password }));
            alert("Doctor registered successfully!");
            window.location.href = "login.html";
        });
    }

    
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("login-email").value.trim();
            const password = document.getElementById("login-password").value;
            const userData = JSON.parse(localStorage.getItem(email));

            if (userData && userData.password === password) {
                alert(`Login successful as ${userData.role}`);
                window.location.href = userData.role === "doctor" ? "home_pages/home_doctor.html" : "home_pages/home-patient.html";

            } else {
                alert("Invalid email or password!");
            }
        });
    }

    
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

