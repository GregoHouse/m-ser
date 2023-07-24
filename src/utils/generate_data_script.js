const { faker } = require("@faker-js/faker");
const {
  createUserController,
} = require("../controllers/userController/createUserController.js");

function generarUsuario() {
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const gender = faker.person.sexType();
  const day_birth = faker.date.birthdate();
  const email = faker.internet.email();
  const phone = faker.phone.number();
  const credit_card_warranty = faker.finance.creditCardNumber();
  const avatar_img = faker.image.url();
  const password = faker.internet.password();
  const location = {
    name: faker.lorem.word(),
    city: faker.location.city(),
    state: faker.location.state(),
    adress: faker.location.streetAddress(),
    country: faker.location.country(),
    postal_code: faker.location.buildingNumber(),
  };

  return {
    body: {
      firstname,
      lastname,
      gender,
      day_birth: day_birth.toString(),
      email,
      phone,
      credit_card_warranty,
      avatar_img,
      password,
      location,
    },
  };
}

// Generar 50 usuarios aleatorios
const generateUsers = async () => {
  for (let i = 0; i < 50; i++) {
    const user = await generarUsuario();
    await createUserController(user);
  }
};

module.exports = generateUsers;
