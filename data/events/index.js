const utils = require('../utils');
const config = require('../../config');
const {Pool} = require('pg');

const listMaterial = async () => {
    try{
        const db = new Pool(config.postgreSql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await db.query(sqlQueries.listMaterial);
        return list.rows;
    }catch(error) {
        console.error("Error fetching materials:", error);
        error.message;
    }
}

const listByIdMaterial = async (materialId) => {
    try{
        const db = new Pool(config.postgreSql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await db.query(sqlQueries.listByIdMaterial, [materialId]);
        return list.rows;
    }catch(error) {
        console.error("Error fetching materials:", error);
        error.message;
    }
}

const addMaterial = async (materialData) => {
    try{
        const db = new Pool(config.postgreSql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertMaterial = await db.query(sqlQueries.addMaterial, 
                                            [materialData.materialName, 
                                            materialData.materialDescription, 
                                            materialData.materialStartDate, 
                                            materialData.materialPrice]);
        return insertMaterial.rows;
    }catch(error){
        console.error("Error adding materials:", error);
        return error.message;
    }
}

const updateMaterial = async (materialId, materialData) => {
    try {
        const db = new Pool(config.postgreSql);
        const sqlQueries = await utils.loadSqlQueries('events');
        console.log(materialData,materialId);
        const update = await db.query(sqlQueries.updateMaterial,
                                    [materialData.materialName, 
                                    materialData.materialDescription, 
                                    materialData.materialStartDate, 
                                    materialData.materialPrice,
                                    materialId]);
        return listByIdMaterial(materialId);
    } catch (error) {
        return error.message;
    }
}

const deleteMaterial = async(materialId) => {
    try {
        const db = new Pool(config.postgreSql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleted = await db.query(sqlQueries.deleteMaterial, [materialId]);
        return deleted.rows;
    } catch (error) {
        return error.message;
    }
}

const deleteAllMaterial = async() => {
    try{
        const db = new Pool(config.postgreSql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleteall = await db.query(sqlQueries.deleteAllMaterial);
        return deleteall.rows;
    }catch(error){
        return error.message;
    }
}

module.exports = {
    listMaterial,
    listByIdMaterial,
    addMaterial,
    updateMaterial,
    deleteMaterial,
    deleteAllMaterial
}