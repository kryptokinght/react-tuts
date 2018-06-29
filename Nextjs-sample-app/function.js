const functions = {
  add: (x, y) => x + y,
  createUser: (x, y) => {
    return { name: x, age: y };
  }
};

module.exports = functions;
