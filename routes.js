let express = require('express');
let router = express.Router();

let controller = require('./controller');

router.get('/hello', controller.hellow)
router.get('/', (req, res) => res.json("nothing to see"));


module.exports = router;