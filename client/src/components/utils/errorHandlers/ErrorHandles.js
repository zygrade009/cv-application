// Function to validate email
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number
function isValidPhoneNumber(phoneNumber) {
  // Regular expression for basic phone number validation
  const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
  return phoneRegex.test(phoneNumber);
}

export { isValidEmail, isValidPhoneNumber };