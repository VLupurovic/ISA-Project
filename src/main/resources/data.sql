insert into fishing_instructor(email, first_name, last_name, password, average_rating) values ('visnjic1999@gmail.com', 'Visnja', 'Visnjic', 'sifra1', 0);
insert into fishing_instructor(email, first_name, last_name, password, average_rating) values ('markovic1999@gmail.com', 'Marko', 'Markovic', 'sifra2', 0);
insert into fishing_instructor(email, first_name, last_name, password, average_rating) values ('djordjevic1999@gmail.com', 'Djordje', 'Djordjevic', 'sifra3', 0);

insert into boat_owner(email, first_name, last_name, password, average_rating) values ('vasic1999@gmail.com', 'Vasa', 'Vasic', 'sifra1', 0);
insert into boat_owner(email, first_name, last_name, password, average_rating) values ('vidic1999@gmail.com', 'Vida', 'Vidic', 'sifra2', 0);
insert into boat_owner(email, first_name, last_name, password, average_rating) values ('slobic1999@gmail.com', 'Sloba', 'Slobic', 'sifra3', 0);

insert into cabin_owner(email, first_name, last_name, password, average_rating) values ('sule1999@gmail.com', 'Sule', 'Sulic', 'sifra1', 0);
insert into cabin_owner(email, first_name, last_name, password, average_rating) values ('todorcevic1999@gmail.com', 'Todor', 'Todorcevic', 'sifra2', 0);
insert into cabin_owner(email, first_name, last_name, password, average_rating) values ('nikolic1999@gmail.com', 'Nikola', 'Nikolic', 'sifra3', 0);

insert into adventure(name, address, description, average_rating, instructor_id) values ('Rafting', 'Tara', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."', 0, 1);
insert into adventure(name, address, description, average_rating, instructor_id) values ('Rowing', 'Kopaonik', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."', 0, 1);
insert into adventure(name, address, description, average_rating, instructor_id) values ('Huting', 'Stara Planina', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."', 0, 1);

insert into cabin(name, address, description, average_rating, cabin_owner_id) values ('Corner Cottage', '711-2880 Nulla St. Mankato Mississippi 96522', 'asdasdasdasdasd', 0, 1);
insert into cabin(name, address, description, average_rating, cabin_owner_id) values ('Ivy Cottage', '606-3727 Ullamcorper. Street Roseville NH 11523', 'qweqweqweqwe', 0, 2);
insert into cabin(name, address, description, average_rating, cabin_owner_id) values ('Mill House', '7292 Dictum Av. San Antonio MI 47096', 'werwerwerwer', 0, 3);
insert into cabin(name, address, description, average_rating, cabin_owner_id) values ('Orchard Cottage', '191-103 Integer Rd. Corona New Mexico 08219', 'ertertert', 0, 1);
insert into cabin(name, address, description, average_rating, cabin_owner_id) values ('The Gables', '511-5762 At Rd. Chelsea MI 67708', 'tyutyutyutyu', 0, 2);

insert into boat(name, location, description, average_rating, boat_owner_id) values ('Apollo', 'Stevana Musica 3', 'Mnogo lep brodic', 0, 1);
insert into boat(name, location, description, average_rating, boat_owner_id) values ('Abyss', 'Bul Cara Lazara 11', 'Jos lepsi brodic', 0, 2);
insert into boat(name, location, description, average_rating, boat_owner_id) values ('Black Pearl', 'Stevana Branovackog 9', 'Super brodic', 0, 3);
insert into boat(name, location, description, average_rating, boat_owner_id) values ('Destiny', 'Karadjordjeva 38', 'Odlican brodic', 0, 1);

insert into commodity(description, price, boat_id) values ('BBQ', 0.0, 1);
insert into commodity(description, price, boat_id) values ('Kitchen', 1000, 1);
insert into commodity(description, price, boat_id) values ('Bedroom', 1500, 1);
insert into commodity(description, price, boat_id) values ('Tour Guide', 3000, 1);

insert into term(start_time, end_time, reserved, boat_id) values ('1-1-2012', '14-2-2013', false, 1);
insert into term(start_time, end_time, reserved, boat_id) values ('3-3-2012', '15-3-2013', false, 1);
insert into term(start_time, end_time, reserved, boat_id) values ('13-5-2012', '22-5-2013', false, 1);


insert into adventure_term(adventure_id, start_time, end_time, price_per_day, is_promo, discount) values (1, '2020-01-01', '2020-01-13', 900, false, 0);
insert into adventure_term(adventure_id, start_time, end_time, price_per_day, is_promo, discount) values (2, '2020-02-03', '2020-02-25', 500, false, 0);

insert into boat_term(boat_id, start_time, end_time, price_per_day, is_promo, discount) values (1, '2021-01-01', '2021-01-13', 1900, false, 0);
insert into boat_term(boat_id, start_time, end_time, price_per_day, is_promo, discount) values (2, '2021-02-03', '2021-02-06', 1500, false, 0);

insert into cabin_term(cabin_id, start_time, end_time, price_per_day, is_promo, discount) values (1, '2022-01-01', '2022-01-13', 2900, false, 0);
insert into cabin_term(cabin_id, start_time, end_time, price_per_day, is_promo, discount) values (2, '2022-02-03', '2022-02-06', 2500, false, 0);

/*Promotions*/
insert into adventure_term(adventure_id, start_time, end_time, price_per_day, is_promo, discount) values (1, '2020-05-20', '2020-05-25', 900, true, 0.3);
insert into adventure_term(adventure_id, start_time, end_time, price_per_day, is_promo, discount) values (2, '2020-11-13', '2020-02-16', 500, true, 0.2);

insert into boat_term(boat_id, start_time, end_time, price_per_day, is_promo, discount) values (1, '2021-04-06', '2021-04-10', 1900, true, 0.3);
insert into boat_term(boat_id, start_time, end_time, price_per_day, is_promo, discount) values (2, '2021-12-12', '2021-12-14', 1500, true, 0.4);

insert into cabin_term(cabin_id, start_time, end_time, price_per_day, is_promo, discount) values (1, '2022-08-11', '2022-08-17', 2900, true, 0.25);
insert into cabin_term(cabin_id, start_time, end_time, price_per_day, is_promo, discount) values (2, '2022-09-03', '2022-09-06', 2500, true, 0.15);


/*Reservations*/
insert into registered_user(address, city, country, phone_number, points, first_name, last_name, email, password, enabled, average_rating) values ('asd', 'asd', 'asd', '123', 100, 'asd', 'asd', 'jakovljevic1999@gmail.com', 'asd', true, 0);

insert into adventure_reservation(registered_user_id, adventure_id, start_time, end_time, price) values (1, 1, '2020-01-01', '2020-01-10', 1000);
insert into adventure_reservation(registered_user_id, adventure_id, start_time, end_time, price) values (1, 2, '2020-02-02', '2020-02-10', 1000);

insert into adventure_reservation(registered_user_id, adventure_id, start_time, end_time, price) values (1, 1, '2022-06-07', '2022-06-17', 1000);
insert into adventure_reservation(registered_user_id, adventure_id, start_time, end_time, price) values (1, 2, '2023-02-02', '2023-02-10', 1000);


insert into boat_reservation(registered_user_id, boat_id, start_time, end_time, price) values (1, 1, '2020-01-01', '2020-01-10', 2000);
insert into boat_reservation(registered_user_id, boat_id, start_time, end_time, price) values (1, 2, '2020-02-02', '2020-02-10', 2000);

insert into boat_reservation(registered_user_id, boat_id, start_time, end_time, price) values (1, 1, '2023-01-01', '2023-01-10', 2000);
insert into boat_reservation(registered_user_id, boat_id, start_time, end_time, price) values (1, 2, '2023-02-02', '2023-02-10', 2000);


insert into cabin_reservation(registered_user_id, cabin_id, start_time, end_time, price) values (1, 1, '2020-01-01', '2020-01-10', 3000);
insert into cabin_reservation(registered_user_id, cabin_id, start_time, end_time, price) values (1, 2, '2020-02-02', '2020-02-10', 3000);

insert into cabin_reservation(registered_user_id, cabin_id, start_time, end_time, price) values (1, 1, '2023-01-01', '2023-01-10', 3000);
insert into cabin_reservation(registered_user_id, cabin_id, start_time, end_time, price) values (1, 2, '2023-02-02', '2023-02-10', 3000);

