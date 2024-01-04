SELECT 
    materialId,
    materialName,
    materialDescription,
    materialStartDate,
    materialPrice
FROM 
    material
WHERE materialId=$1