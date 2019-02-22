INSERT INTO house 
(name, address, city, state, zip)
VALUES($1, $2, $3, $4, $5);

select *
from house