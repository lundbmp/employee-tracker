INSERT INTO department(name)
VALUES
    ('Human Resources'),
    ('Engineering'),
    ('Accounting');

INSERT INTO role(title, salary, department_id)
VALUES
    ('admin assistant', 50000.00, 1),
    ('administrator', 100000.00, 1),
    ('senior engineer', 100000.00, 2),
    ('engineer', 80000.00, 2),
    ('senior accountant', 100000.00, 3),
    ('accountant', 80000.00, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Michael', 'Lundberg', 3, NULL),
('Ryan', 'Loftus', 2, NULL),
('Sam', 'Egleston', 5, NULL),
('Benji', 'Cat', 4, 1),
('Napoleon', 'Cat', 4, 1),
('Duke', 'Dog', 1, 2),
('Moose', 'Dog', 1, 2),
('Lucy', 'Dog', 6, 3),
('Kiki', 'Dog', 6, 3);
