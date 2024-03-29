// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

var userController = require('./userController');

router.route('/users')
	.get(userController.index)
	.post(userController.new);

router.route('/users/:user_id')
	.get(userController.view)
	.patch(userController.update)
	.put(userController.update)
	.delete(userController.delete);

// Export API routes
module.exports = router;
