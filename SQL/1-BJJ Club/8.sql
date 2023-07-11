SELECT
    users.firstName AS 'FIRST NAME',
    users.lastName AS 'LAST NAME',
    belts.colour AS 'COLOUR'
FROM
    certifications
    INNER JOIN users ON users.id = certifications.user_id
    INNER JOIN belts ON belts.id = certifications.belt_id