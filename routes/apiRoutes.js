//Pull in required dependencies
var path = require('path');
let axios = require('axios');

module.exports = function (app) {


    //Displays friends list
    app.post('/api/search', function (req, res) {
        console.log('req.body', req.body);
        let { searchTerm, startYear, endYear, numRecords } = req.body;

        // TODO: make api call
        //axios.post('', data, () => {

        //});

        res.json({ articles: [ {headline: 'Stuff in US'} ] });
    })

    //Post new entry to the friends array
    app.post('/api/friends', function (req, res) {
        friends.push(req.body)

        //Store user input in a variable and key into the scores parameter
        var surveyInput = req.body; // where the body parser shines
        scoreArr = ('userData', surveyInput.scores);
        
        //Converts the scores array from a list of strings to a list of integers
        //stringArr.map(Number) will convert an array of strings to an array of numbers
        var numbers = scoreArr.map(Number);
        console.log(numbers)
        
        //Gets total sum of integers in the array
        function getSum(total, num) {
            return total + num;
        }
        
        surveyTotal = numbers.reduce(getSum);
        console.log("the total is = " + surveyTotal)


        // Loop over friends list, do a comparison to find best match
        // for (var i = 0; i < friends.length; i++) {
        // console.log("console logging i" + i)
        // }



        // return best match
        res.json(friends);
    })

}