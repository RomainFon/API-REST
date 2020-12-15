import express from 'express'

module.exports = function (app: express.Express) {
    require('./User/UserController')(app);
    return app;
}
