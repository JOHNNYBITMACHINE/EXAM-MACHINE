const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', function(event) {
    sidebar.classList.toggle('open');
    event.stopPropagation(); // Prevent body click event
});

// Close sidebar when clicking outside (on body)
document.body.addEventListener('click', function(event) {
    // Only close if sidebar is open and click is outside sidebar/toggle
    if (
        sidebar.classList.contains('open') &&
        !sidebar.contains(event.target) &&
        event.target !== sidebarToggle
    ) {
        sidebar.classList.remove('open');
    }
});









    // Your Firebase config here
const firebaseConfig = {
            apiKey: "AIzaSyD-V8jatJe_m0fu5UB6-wk5bUYEKG2EGQA",
            authDomain: "sarkari-exam-tech.firebaseapp.com",
            projectId: "sarkari-exam-tech",
            storageBucket: "sarkari-exam-tech.firebasestorage.app",
            messagingSenderId: "933261481331",
            appId: "1:933261481331:web:36290a4471a44ed9dfa106",
            measurementId: "G-YTWB0F469R"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Email/Password Signup
    function signup() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          alert("Sign up successful!");
          closePopup();
          updateStatus(userCredential.user);
        })
        .catch(error => alert(error.message));
    }

    // Email/Password Login
    function login() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          alert("Login successful!");
          closePopup();
          updateStatus(userCredential.user);
        })
        .catch(error => alert(error.message));
    }

    // Google Sign-In
    function googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then(result => {
          alert("Signed in with Google!");
          closePopup();
          updateStatus(result.user);
        })
        .catch(error => alert(error.message));
    }

    // Update UI
    function updateStatus(user) {
      document.getElementById("user-status").innerText = `Signed in as: ${user.email}`;
    }

    // Show popup after 30 seconds if not signed in
    setTimeout(() => {
      auth.onAuthStateChanged(user => {
        if (!user) {
          document.getElementById("auth-popup").style.display = "block";
        } else {
          updateStatus(user);
        }
      });
    }, 30000); // 30,000ms = 30 seconds

    // Close popup
    function closePopup() {
      document.getElementById("auth-popup").style.display = "none";
    }