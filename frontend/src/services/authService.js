// const API_URL = 'https://your-backend-api.com';  // Replace with your API URL

// export const register = async (email, password, name) => {
//   try {
//     const response = await fetch(`${API_URL}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password, name }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to register');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error registering user:', error);
//     throw error;
//   }
// };

// // Login function
// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     const { token, user } = response.data;  // Assuming the API returns a token and user data
//     // Save the token to localStorage (or sessionStorage) for future authentication
//     localStorage.setItem('authToken', token);
//     return user;  // Return the user data
//   } catch (error) {
//     throw new Error('Failed to login');
//   }
// };

// // Logout function
// export const logout = () => {
//   // Remove the token from localStorage (or sessionStorage) to log out the user
//   localStorage.removeItem('authToken');
// };

const API_URL = 'http://localhost:4000/api/user';  // Replace with your actual API URL

// Register function
export const register = async (name,email,password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,password}),  // Convert the user data to JSON
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();  // Parse JSON response
    return data;
    
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),  // Convert email and password to JSON
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();  // Parse JSON response
    return data;  // Return the response data, such as a token or user info
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Logout function
export const logout = () => {
  // Clear any session or local storage data related to authentication
  localStorage.removeItem('authToken');
  // Optionally redirect to login page or home page
  window.location.href = '/login';
};
