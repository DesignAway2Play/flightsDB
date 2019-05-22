var Flight = require('../models/flight');
var Ticket = require('../models/ticket');
var moment = require('moment');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    //minD
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights', { title: 'All flights', flights });
    });
};



function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, ticket) {
    res.render('flights/show', { title: 'Flight Detail', flight, ticket });
    });
  });
}


function newFlight(req, res) {
    res.render('flights/new', { title: 'Create Flight' });
 

};

function create(req, res) {
    var flight = new Flight(req.body);
    
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      console.log(flight);
      res.redirect('/flights');
    });
  }

  /*
  function minD() {
    var inputD = document.querySelector('#cal');
    inputD.setAttribute('min', moment().format("MM DD YYYY;"));
}
*/
