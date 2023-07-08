const pushNotificationController = require('../controllers/push-notification.controllers');

const express = require('express');
const router = express.Router();

router.get('/sendNotification', pushNotificationController.SendNotification);
router.post('/sendNotificationToDevice', pushNotificationController.SendNotificationToDevice);

module.exports= router;