var connection = require("./db.js");

/**
 * Retrieve all usefulLinks from the DB.
 */
const retrieveUsefulLinks  = function() {
    return connection.task('retrieveUsefulLinks ', function *(t) {
        const links = t.any('select *' + 
        'from useful_links;');
        return links;
    });
}


module.exports = {
    retrieveUsefulLinks
  }