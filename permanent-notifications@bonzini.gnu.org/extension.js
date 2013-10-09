/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

const MessageTray = imports.ui.messageTray;

function init() {
    let tray = MessageTray.MessageTray.prototype;
    tray.oldUpdateNotificationTimeout = tray._updateNotificationTimeout;
}

function enable() {
    MessageTray.MessageTray.prototype._updateNotificationTimeout = function(timeout) {
        this._notificationTimeoutId = timeout ? 1 : 0;
    }
}

function disable() {
    let tray = MessageTray.MessageTray.prototype;
    tray._updateNotificationTimeout = tray.oldUpdateNotificationTimeout;
}
