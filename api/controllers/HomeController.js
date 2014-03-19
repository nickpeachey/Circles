var HomeController = {

    index: function(req, res) {
        return res.view({
           message: "Hello Nick this is some text"
        });
    }
}

module.exports = HomeController;
