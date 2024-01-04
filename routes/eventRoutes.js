const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

const {listByIdMaterial, listMaterial, addMaterial, updateMaterial, deleteMaterial, deleteAllMaterial} = eventController;

let postRequestCount = 0;

const logPostData = (req, res, next) => {
    // console.log('Data received in POST request:', req.body);
    // Increment the count for each POST request
    postRequestCount++;
    console.log('Total POST requests made:', postRequestCount);
    next(); // Call next to proceed to the next middleware or route handler
};

router.get('/material', listMaterial);
router.get('/material/:id', listByIdMaterial);
router.post('/material',logPostData, addMaterial);
router.put('/material/:id', updateMaterial);
router.delete('/material/:id', deleteMaterial);
router.delete('/material', deleteAllMaterial);

module.exports = {
    routes: router
}