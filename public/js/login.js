const loginFormHandler = async (event) => {
    event.preventDefault();
  console.log("yeyay");
    // Collect values from the login form
    const email = document.querySelector('#loginemail').value.trim();
    const password = document.querySelector('#loginpassword').value.trim();

    if (email && password) {
        console.log(email, password);
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        let password2 = document.querySelector('#loginpassword')     
        password2.classList = "form-control is-invalid";
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#username').value.trim();
    const email = document.querySelector('#signupemail').value.trim();
    const password = document.querySelector('#signuppassword').value.trim();
  
    if (user_name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({user_name,email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        let password3 = document.querySelector('#sighpassword')
        password3.classList = "form-control is-invalid";
        alert(response.statusText);
      }
    }
  };
  const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  
  
//   document
//     .getElementById('login')
//     .addEventListener('submit', loginFormHandler);

    const login = document.getElementById('loginbtn')
    if(login){
            login.addEventListener("click", loginFormHandler)

    }
   const sighup = document.getElementById('sighupbtn');
 if (sighup){
  sighup.addEventListener("click", signupFormHandler) 

 }
   const logoutbutton = document.querySelector('#logoutbtn')

 if (logoutbutton){
    logoutbutton.addEventListener('click', logout);
 }
 const offcanvasElementList = document.querySelectorAll('.offcanvas')
 const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))