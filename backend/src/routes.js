const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/Upload');

const SessionController = require('./controllers/SessionController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashBoardController.show);

routes.post('/sessions', SessionController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;