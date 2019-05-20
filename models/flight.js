var mongoose = require('mongoose');
var moment = require('moment');


var destinationSchema = new mongoose.Schema({
    airport: {type: String, enum: ["AUS", "LAX", "SEA", "DAL"]},
    arrival: { type: Date}
},
    {
        timestamps: true
});

var flightSchema = new mongoose.Schema({
    airline: {type: String, enum: ["AA", "DL", "WN", "UA"]
},
airport: {type: String, enum: ["AUS", "LAX", "SEA", "DAL"], default: "SEA"},


    flightNo: {type: Number, required: true, min: 10, max: 9999
        },
        destinations: [destinationSchema],

    departs: {type: Date, 
        required: function(){
            var cDate = new Date();
            var addYear = new Date();
            if ((cDate.getFullYear() + 1) % 4 === 0) {
                addYear.setDate(cDate.getDate()+366);
                return addYear;
            }
            else {
                addYear.setDate(cDate.getDate()+365);
                return addYear;
            }
    },
        default: function() {
            var cDate = new Date();
            var addYear = new Date();
            if ((cDate.getFullYear() + 1) % 4 === 0) {
                addYear.setDate(cDate.getDate()+366);
                return addYear;
            }
            else {
                addYear.setDate(cDate.getDate()+365);
                return addYear;
            }
        }
        
    },
},

        {
        timestamps: true
        });

module.exports = mongoose.model('Flight', flightSchema);