const Reservation = require('../models/reservation');

exports.reservation_create = function (req, res) {
    let reservation = new Reservation(
        {
            date: req.body.date,
            heure : req.body.heure
        }
    );

    reservation.save(function (err) {
        if (err) {
            return(err);
        }
        res.send('reservation Created successfully')
    })
};


//get all reservation

 exports.index = function (req, res) {
    Reservation.find( function (err, reservation) {
        if (err) return (err);
        res.send(reservation);
    })
};

exports.reservation_delete = function (req, res) {
    Reservation.findByIdAndRemove(req.params.id, function (err) {
        if (err) return (err);
        res.send('Deleted successfully!');
    })
};