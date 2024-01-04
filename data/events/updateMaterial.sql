-- Update the material in the 'material' table
UPDATE material
SET 
    materialName = $1,
    materialDescription = $2,
    materialStartDate = $3,
    materialPrice = $4
WHERE 
    materialId = $5;