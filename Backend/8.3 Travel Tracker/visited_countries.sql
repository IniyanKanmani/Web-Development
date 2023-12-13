CREATE TABLE
    visited_countries (
        id serial PRIMARY key,
        country_code CHAR(2) NOT NULL UNIQUE
    );

INSERT INTO
    visited_countries (country_code)
VALUES
    ('fr');

INSERT INTO
    visited_countries (country_code)
VALUES
    ('gb');

INSERT INTO
    visited_countries (country_code)
VALUES
    ('us');

SELECT
    *
FROM
    visited_countries;