SELECT
    certifications.id AS 'ID',
    CONCAT(users.firstName, ' ', users.lastName) AS 'NAME',
    belts.colour AS 'BELT',
    certifications.updated_at AS 'LAST UPDATE'
FROM
    certifications
    JOIN users ON users.id = certifications.user_id
    JOIN belts ON belts.id = certifications.belt_id
ORDER BY
    certifications.updated_at DESC