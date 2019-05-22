var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    show,
    addToFlight
}

function newTicket(req, res) {
      res.render('tickets/new', {
        title: 'Add Ticket',
      });
  }

function create(req, res) {
    var ticket = new Ticket(req.body,);{
    Ticket.create(req.body, function(err, ticket) {
            res.redirect('/flights/:id/tickets/new');
          });
    };
  }


function show(req, res) {
    Flight.findById(req.params.id), function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, ticket){
        res.render('flights/show', {
          title: 'Flights Detail', flight, ticket
        });
      });
    };
  }

  function addToFlight(req, res) {
  
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
       res.redirect(`/flights/${req.params.id}`);
      });
    };
 


/*
  function addToFlight(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
      Ticket.flight.push(req.body.ticketId);
      Ticket.seat.push(req.body)
      Ticket.save(function (err) {
        res.redirect(`/flights/${Flight._id}`);
      });
    });
  }
*/
