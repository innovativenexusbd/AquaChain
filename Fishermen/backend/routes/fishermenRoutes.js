const express = require('express');
const router = express.Router();
const fishermenController = require('../controllers/fishermenController');

router.get('/unapproved', fishermenController.getUnapprovedFishermen);
router.put('/approve/:id', fishermenController.approveFisherman);

module.exports = router;
