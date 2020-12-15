import express from 'express'

module.exports = function (app: express.Express) {
    require('./Auth/AuthController')(app);
    require('./User/UserController')(app);
    return app;
}
