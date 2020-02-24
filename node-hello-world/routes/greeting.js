module.exports = {
    hello: function(req, res) {
        console.log("req.body.name",req.body.name)
        if (!req.body.name) {
            
            res.send('An error occurred: Name is a required paramter');
        }
    }
};