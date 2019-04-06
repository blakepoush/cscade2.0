/**
 * Renders grades page as a controller.
 */
module.exports.index = function(req, res, next) {
    res.render('grades', {
        page: 'Grades'
    });
}