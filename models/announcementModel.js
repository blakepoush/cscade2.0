var connection = require("./db.js");

/**
 * Retrieve all announcements from the DB.
 */
const retrieveAnnouncements  = function() {
    return connection.task('retrieveAnnouncements ', function *(t) {
        const announcements = t.any('select * from announcements where dateExpired >= now();');
        return announcements;
    });
}


module.exports = {
    retrieveAnnouncements
  }