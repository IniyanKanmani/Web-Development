CREATE TABLE
    world_food (
        id serial PRIMARY key,
        country VARCHAR(45),
        rice_production FLOAT,
        wheat_production FLOAT
    );

SELECT
    *
FROM
    world_food;

SELECT
    country
FROM
    world_food;

SELECT
    country,
    wheat_production
FROM
    world_food;

SELECT
    rice_production
FROM
    world_food
WHERE
    country = 'United States';

SELECT
    country
FROM
    world_food
WHERE
    wheat_production > 20.0;

SELECT
    country
FROM
    world_food
WHERE
    country LIKE 'U' || '%';

SELECT
    country
FROM
    world_food
WHERE
    country LIKE '%' || 'a';

INSERT INTO
    world_food (country, rice_production, wheat_production)
VALUES
    ('Italy', '1.46', '7.3');

SELECT
    *
FROM
    world_food;