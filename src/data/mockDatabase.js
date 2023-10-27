const users = [
    
  ];
  
  function getUsers() {
    return users.map((user) => {
      const userWithoutProperties = { ...user };
        delete userWithoutProperties.confirmPassword;
        delete userWithoutProperties.agreeTermsCheckbox;
        return userWithoutProperties;
    });
  }
  
  function addUser(newUser) {
    users.push(newUser);
  }

  
  export { getUsers, addUser };