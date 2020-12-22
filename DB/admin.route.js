const express = require('express');
const adminRoutes = express.Router();


// Require Business model in our routes module
let Admin = require('./admin.model');

// Defined store route
adminRoutes.route('/add').post(function (req, res) {
  let admin = new Admin(req.body);
  admin.save()
    .then(admin => {
      res.status(200).json({'admin': 'admin is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//login
adminRoutes.post('/login', (req, res) => {
  Admin.findOne({
    email: req.body.email
  })
    .then(admin => {
      if (admin) {
        if (bcrypt.compareSync(req.body.password, admin.password)) {
          const payload = {
            _id: admin._id,
            username: admin.username,
            email: admin.email,
            address: admin.address,
            contact: admin.contact,
            job: admin.job,
            
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          res.json({ error: 'User is not exist!' });
        }
      } else {
        res.json({ error: 'User is not exist!' });
      }
    })
    .catch(err => {
      res.status('error: '). send(err);
    });
});
// Defined get data(index or listing) route
adminRoutes.route('/').get(function (req, res) {
    Admin.find(function(err, admin){
    if(err){
      console.log(err);
    }
    else {
      res.json(admin);
    }
  });
});

// Defined edit route
adminRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Admin.findById(id, function (err, admin){
      res.json(admin);
  });
});

//  Defined update route
adminRoutes.route('/update/:id').post(function (req, res) {
    Admin.findById(req.params.id, function(err, admin) {
    if (!admin)
      res.status(404).send("data is not found");
    else {
        admin.username = req.body.username;
        admin.email = req.body.email;
        admin.address = req.body.address;
        admin.contact = req.body.contact;
        admin.job = req.body.job;
        admin.password = req.body.password;
        admin.save().then(admin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
adminRoutes.route('/delete/:id').get(function (req, res) {
    Admin.findByIdAndRemove({_id: req.params.id}, function(err, admin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = adminRoutes;