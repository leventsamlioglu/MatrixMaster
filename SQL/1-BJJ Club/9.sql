SELECT
    certifications.id AS 'ID',
    users.firstName AS 'FIRST NAME',
    users.lastName AS 'LAST NAME',
    belts.colour AS 'COLOUR',
    certifications.updated_at AS 'LAST UPDATE'
FROM
    certifications
    JOIN users ON users.id = certifications.user_id
    JOIN belts ON belts.id = certifications.belt_id
ORDER BY
    certifications.updated_at