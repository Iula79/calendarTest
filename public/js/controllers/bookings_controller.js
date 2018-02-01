meanApp.controller('BookingCtrl', ['$http', '$log', '$scope',  bookingCtrl]);

function bookingCtrl($http, $log, $scope) {
    $log.info("Inside the bookings controller");

    var self = this;

    self.all = [];
    self.newBooking = {};
    self.addBooking = addBooking;
    self.deleteBooking = deleteBooking;
    self.editBooking = editBooking;
    // self.checkValue = checkValue
    
    getBookings();
    
    //function that shows all the Bookings
    function getBookings() {
        $http({
            //using the method get to show the Bookings in the view
            //the request then goes to the server
            method: 'GET',
            url: '/book/bookings'
        }).then(function(res) {
            //saving
            var myVar = res.data
            myVar.map(function(el) {
                // console.log(el)
                Object.keys(el).map(function(key,index){
                        if (key=== "arrivalDate"|| key=== "departureDate"){
                             el[key]= new Date(el[key])
                        }else 
                        {el[key]= el[key]}
                         
                })
                // console.log(el)
                // return res.data[key]["arrivalDate"]= 
                //     new Date(res.data[key]["arrivalDate"])     
            });
            // console.log(myVar)
            self.all = res.data
            console.log(self.all)
        }, function(err) {
            console.log(err);
        });
    }


    //function that allows us to add new Bookings to our BookingList
    function addBooking() {
        $http({
            method: 'POST',
            url: '/book/bookings',
            //takes the data that comes in and saves it in the object newBooking
            data: self.newBooking
        }).then(function(res) {
            getBookings();
            $log.info(res.data);
        }, function(err) {
            console.log(err);
        });
        self.newBooking = {};
    }

    //function that allows us to delete specific Bookings from our BookingList
    function deleteBooking(booking) {
        console.log("in delete")
        $http({
            method: 'DELETE',
            url: '/book/bookings/' + booking._id,
            data: self.newBooking
        }).then(function(res) {
            //running this function to update the list
            getBookings();
            $log.log(self);
        }, function(err) {
            console.log(err);

        });
        self.newBooking = {};
    }

    function editBooking(booking) {
        console.log("inedit")
        console.log(booking)
        $http({
            method: 'PUT',
            url: '/book/bookings/' + booking._id,
            data: booking
        }).then(function(res) {
            console.log(res)
            getBookings();
        }, function(err) {
            console.log(err);
        });

    }
    
}