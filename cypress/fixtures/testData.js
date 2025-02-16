export const LoginCredentials = {
    validEmail: 'cupkovic17@yahoo.com',
    validPassword: 'test123',
    invalidEmail: 'wrong@email.com',
    invalidPassword: 'error',
    wrongEmailFormat: 'cupkovic17yahoo.com'
  };


  export const generateUser = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    
    return {
      name: `User${randomString}`,
      email: `testuser${randomString}@test.com`,
      password: `Pass${randomString}!123`,
    };
  };


  export const shopItems = {
    existingItemInStock: 'AMD Ryzen 9 5900X',
    nonExistingItem: 'blah',
    
  };
