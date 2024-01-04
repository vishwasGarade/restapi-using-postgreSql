INSERT INTO material
(
    materialName,
    materialDescription,
    materialStartDate,
    materialPrice
)
VALUES
(
    $1,
    $2,
    $3,
    $4
)

RETURNING materialId AS materialId;