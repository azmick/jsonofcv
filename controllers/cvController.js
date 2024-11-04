const fs = require('fs');
const path = require('path');

const getCVData = () => {
    const cvPath = path.join(__dirname, '../model/cv.json');
    return JSON.parse(fs.readFileSync(cvPath, 'utf8'));
};

const getCV = (req, res) => {
    const data = getCVData(); // Burada doğrudan veriyi alıyoruz
    res.json(data);
};

const getKisiselBilgiler=(req,res)=>{
    const data=getCVData();
    res.json(data["Kişisel Bilgiler"]);
}

const getIletisimBilgileri = (req,res)=>{
    const data = getCVData();
    res.json(data["İletişim Bilgileri"]);
}

const getEgitim = (req,res)=>{
    const data = getCVData();
    res.json(data["Eğitim"]);
}

const getCalismaGecmisi = (req,res)=>{
    const data = getCVData();
    res.json(data["Çalışma Geçmişi"]);
}

const getOrganizasyon = (req,res)=>{
    const data = getCVData();
    res.json(data["Organizasyon"]);
}

const getSertifikalar = (req,res)=>{
    const data = getCVData();
    res.json(data["Sertifikalar"]);
}

const getDiller = (req,res)=>{
    const data = getCVData();
    res.json(data["Diller"]);
}

module.exports = {
    getCV,
    getKisiselBilgiler,
    getIletisimBilgileri,
    getEgitim,
    getCalismaGecmisi,
    getOrganizasyon,
    getSertifikalar,
    getDiller
}