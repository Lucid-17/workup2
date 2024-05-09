CREATE DATABASE workup;

CREATE TABLE chest(
	chest_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE back(
	back_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE biceps(
	bi_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE triceps(
	tri_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE legs(
	leg_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);

CREATE TABLE core(
	core_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
	rounds VARCHAR(255),
    reps VARCHAR(255),
    pr VARCHAR(255),
    prev VARCHAR(255)
);
