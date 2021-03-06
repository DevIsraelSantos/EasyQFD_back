const connection = require("../../src/app/models/index");

module.exports = () => {
  return Promise.all(
    Object.keys(connection.models).map(key => {
      return connection.models[key].destroy({ truncate: true, force: true });
    })
  );
};