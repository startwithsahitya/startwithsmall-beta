use quasar_assignments_db;

CREATE TABLE assignment_status (
    user_name VARCHAR(200) unique,
    assign_value varchar(20)
);

select* from assignment_status;