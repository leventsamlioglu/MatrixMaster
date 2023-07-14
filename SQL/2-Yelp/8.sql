SELECT
    users.userName AS 'USERNAME',
    restaurants.name AS 'RESTAURANT',
    reviews.rating AS 'RATING',
    reviews.content AS 'COMMENT'
FROM
    reviews
    JOIN users ON users.id = reviews.user_id
    JOIN restaurants ON restaurants.id = reviews.restaurant_id
ORDER BY
    restaurants.name