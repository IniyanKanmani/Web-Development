CREATE TABLE
	countries (
		id serial PRIMARY key,
		country_code CHAR(2),
		country_name VARCHAR(100)
	);

SELECT
	*
FROM
	countries;