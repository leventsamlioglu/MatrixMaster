SELECT
    restaurants.name AS 'Restaurant',   
    COUNT(reviews.id) AS 'Reviews',
    AVG(reviews.rating) AS 'Avg Rating'
FROM
    reviews
    JOIN users ON users.id = reviews.user_id
    JOIN restaurants ON restaurants.id = reviews.restaurant_id
GROUP BY
    reviews.restaurant_id;