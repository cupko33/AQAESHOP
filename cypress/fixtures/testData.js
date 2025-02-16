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
    existingItemInStock: 'blackwidow',
    nonExistingItem: 'blah',
    
  };


  export const generateUserShippingData = () => {
    const randomString = Math.random().toString(36).substring(7);

    return {
      firstName: `Name${randomString}`,
      lastName: `Surname${randomString}`,
      email: `testuser${randomString}@test.com`,
      phoneNumber: Math.floor(1000000000 + Math.random() * 9000000000),
      streetAdress: `Street ${Math.floor(Math.random() * 1000)}`,
      postalCode: Math.floor((Math.random() * 90000) + 10000),
      city: `City${randomString}`,
      country: `Country${randomString}`
    };
  };

