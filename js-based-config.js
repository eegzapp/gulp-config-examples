/**
 * To use js based configs you need to create/export a module which is heavier
 * than json based configs, but you can comment this file (can't comment json).
 */
module.exports = function() {
    var config = {
        test : 'js value'
    };

    return config;
};