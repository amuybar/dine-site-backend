const db = require('./dbSetup');

exports.insertEmail = email => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO emails (email) VALUES (?)', [email], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

exports.insertOrder = (name, price, description, email) => {
  return new Promise((resolve, reject) => {
    // Check if the order already exists in the database
    db.get('SELECT * FROM orders WHERE name = ? AND price = ? AND description = ? AND email = ?',
      [name, price, description, email],
      (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          // Order already exists, reject the promise with a message
          reject('Duplicate order');
        } else {
          // Order does not exist, insert into orders table
          db.run('INSERT INTO orders (name, price, description, email) VALUES (?, ?, ?, ?)',
            [name, price, description, email],
            function (err) {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
        }
      });
  });
};
