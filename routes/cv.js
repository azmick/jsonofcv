const express = require('express');
const router = express.Router();
const {    getCV,
    getKisiselBilgiler,
    getIletisimBilgileri,
    getEgitim,
    getCalismaGecmisi,
    getOrganizasyon,
    getSertifikalar,
    getDiller} = require('../controllers/cvController');

router.get('/',getCV);
router.get('/kisiselbilgiler',getKisiselBilgiler);
router.get('/iletisimbilgileri',getIletisimBilgileri);
router.get('/egitim',getEgitim);
router.get('/çalışmageçmişi',getCalismaGecmisi);
router.get('/organizasyon',getOrganizasyon);
router.get('/sertifikalar',getSertifikalar);
router.get('/diller',getDiller);


module.exports = router;