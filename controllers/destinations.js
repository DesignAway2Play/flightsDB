var Flight = require('../models/flight');



module.exports = {
  // new: newDestination,
  create,
};

// function newDestination(req, res) {
//     Destination.find({}, function (err, destinations) {
//       res.render('destinations/new', {
//         title: 'Add Destination',
//         destinations
//       });
//     })
//   }

function create(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    console.log(flight);
    console.log(flight.destinations);
    flight.destinations.push(req.body);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
};
  
 
