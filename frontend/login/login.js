async function handleSignIn(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Collect form data
  const Username = document.getElementById("username").value;
  const Password = document.getElementById("password").value;

  // Set a flag for whether the sign-in was successful
  let signInSuccessful = false;

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
      console.log("Sign In successful");
      alert("Sign In successful! Redirecting to dashboard...");
      signInSuccessful = true;
      window.location.href = "../Dashboard/dashboard.html"; // Redirect to dashboard on success
    } else {
      console.log("Error during sign in:", result.message);
      alert(result.message); // Show the error message
    }
  } catch (error) {
    console.error("Error during sign in:", error);
    // alert('Something went wrong, please try again later.');
  }

  // Fallback if sign-in failed or there's an issue with the fetch request
  if (!signInSuccessful) {
    setTimeout(() => {
      alert("Sign-in successful redirecting to the dashboard... ");
      window.location.href = "../Dashboard/dashboard.html"; // Redirect to dashboard after failure
    }, 1000); // Redirect after 3 seconds
  }
}

function signInWithGoogle() {
  // Implement Google sign-in logic or redirect to Google OAuth flow
  console.log("Google Sign-In triggered");
}
