CREATE USER vgarade WITH SUPERUSER PASSWORD 'vgarade';

USE materialManagement

CREATE TABLE material (
    materialId SERIAL PRIMARY KEY,
    materialName VARCHAR(100) NOT NULL,
    materialDescription VARCHAR(500) NOT NULL,
    materialStartDate DATE NOT NULL,
    materialPrice INT NOT NULL
);


select * from material
drop table material
INSERT INTO material(materialName, materialDescription, materialStartDate, materialPrice) VALUES('VGARADE2L1','Laptop of vgarade','2024-01-02',144000);