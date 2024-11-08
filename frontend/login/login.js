async function handleSignIn(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Collect form data
  const Username = document.getElementById("username").value;
  const Password = document.getElementById("password").value;

  try {
    // Send a POST request to the backend API
    const response = await fetch("http://localhost:4000/api/v1/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Username, Password }),
    });

    // Parse the response
    const result = await response.json();

    // Handle success or error messages from backend
    if (result.success) {
      localStorage.setItem("token", result.token);
      // console.log("Sign In successful");
      alert("Sign In successful! Redirecting to dashboard...");
      window.location.href = "../Dashboard/dashboard.html"; // Redirect to dashboard on success
    } else {
      console.log("Error during sign in:", result.message);
      alert(result.message); // Show the error message
    }
  } catch (error) {
    console.error("Error during sign in:", error);
    alert('Something went wrong, please try again later.');
  }
}

function signInWithGoogle() {
  // Implement Google sign-in logic or redirect to Google OAuth flow
  console.log("Google Sign-In triggered");
}
