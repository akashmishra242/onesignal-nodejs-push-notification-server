const { ONE_SIGNAL_CONFIG } = require('../config/app.config');
const pushNotificationService = require('../services/push-notification-services');

exports.SendNotification = (req, res, next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: { "en": "Test-Push-Notification" },
        included_segments: ["All"],
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: 'CUSTOM NOTIFICATIONS',
        },

    };

    pushNotificationService.SendNotification(message, (errors, results) => {
        if (errors) {
            return next(errors);
        }
        return res.status(200).send({
            message: 'Notification Sent Successfully',
            data: results
        });
    });
}

exports.SendNotificationToDevice = (req, res, next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: { "en": "Test-Push-Notification" },
        included_segments: ["include_player_ids"],
        include_player_ids: req.body.devices,
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: 'CUSTOM NOTIFICATIONS',
        },

    };

    pushNotificationService.SendNotification(message, (errors, results) => {
        if (errors) {
            return next(errors);
        }
        return res.status(200).send({
            message: 'Notification Sent Successfully',
            data: results
        });
    });
}