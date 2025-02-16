use quasar_assignments_db;

CREATE TABLE user_profile (
    user_name VARCHAR(200) unique,
    email VARCHAR(200) unique,
    _name varchar(200),
    _password VARCHAR(200),
    designation VARCHAR(200),
    organisation varchar(200)
);
