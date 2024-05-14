CREATE DATABASE workup;

CREATE TABLE chest(
	id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE back(
	id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE biceps(
	id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE triceps(
	id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE legs(
	id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE core(
	id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);
