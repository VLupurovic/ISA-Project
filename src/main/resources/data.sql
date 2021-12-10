insert into cabin(name, address, description, average_rating) values ('Corner Cottage', '711-2880 Nulla St. Mankato Mississippi 96522', 'asdasdasdasdasd', 9.7);
insert into cabin(name, address, description, average_rating) values ('Ivy Cottage', '606-3727 Ullamcorper. Street Roseville NH 11523', 'qweqweqweqwe', 8.6);
insert into cabin(name, address, description, average_rating) values ('Mill House', '7292 Dictum Av. San Antonio MI 47096', 'werwerwerwer', 6.7);
insert into cabin(name, address, description, average_rating) values ('Orchard Cottage', '191-103 Integer Rd. Corona New Mexico 08219', 'ertertert', 9.3);
insert into cabin(name, address, description, average_rating) values ('The Gables', '511-5762 At Rd. Chelsea MI 67708', 'tyutyutyutyu', 7.0);

insert into boat(name, location, description, average_rating) values ('Apollo', 'Stevana Musica 3', 'Mnogo lep brodic', 9.8);
insert into boat(name, location, description, average_rating) values ('Abyss', 'Bul Cara Lazara 11', 'Jos lepsi brodic', 9.9);
insert into boat(name, location, description, average_rating) values ('Black Pearl', 'Stevana Branovackog 9', 'Super brodic', 8.9);
insert into boat(name, location, description, average_rating) values ('Destiny', 'Karadjordjeva 38', 'Odlican brodic', 7.8);

insert into commodity(description, price, boat_id) values ('BBQ', 0.0, 1);
insert into commodity(description, price, boat_id) values ('Kitchen', 1000, 1);
insert into commodity(description, price, boat_id) values ('Bedroom', 1500, 1);
insert into commodity(description, price, boat_id) values ('Tour Guide', 3000, 1);

insert into term(start_time, end_time, reserved, boat_id) values ('1-1-2012', '14-2-2013', false, 1);
insert into term(start_time, end_time, reserved, boat_id) values ('3-3-2012', '15-3-2013', false, 1);
insert into term(start_time, end_time, reserved, boat_id) values ('13-5-2012', '22-5-2013', false, 1);

insert into fishing_instructor(email, first_name, last_name, password) values ('jakovljevic1999@gmail.com', 'Igor', 'Jakovljevic', 'sifra1');
insert into fishing_instructor(email, first_name, last_name, password) values ('markovic1999@gmail.com', 'Marko', 'Markovic', 'sifra2');
insert into fishing_instructor(email, first_name, last_name, password) values ('djordjevic1999@gmail.com', 'Djordje', 'Djordjevic', 'sifra3');

insert into adventure(name, address, description, average_rating, instructor_id) values ('Rafting', 'Tara', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."', 9.8, 1);
insert into adventure(name, address, description, average_rating, instructor_id) values ('Rowing', 'Kopaonik', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."', 8.5, 1);
insert into adventure(name, address, description, average_rating, instructor_id) values ('Huting', 'Stara Planina', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."', 8.6, 1);

