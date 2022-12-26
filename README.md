# Internet Softverske Arhitekture - Projekat

## Namena sistema

U okviru projektnog zadatka potrebno je implementirati web aplikaciju koja
predstavlja centralizovani sistem preko kojeg će korisnici moći da rezervišu
vikendice, brodove i instruktore pecanja. Pristup sistemu imaju i vlasnici
vikendica i brodova za oglašavanje, kao i instruktori koji mogu da unose svoje
ponude usluga. Osnovna namena aplikacije je vođenje evidencije o
oglašivačima, registrovanim entitetima, rezervacijama, terminima za zakazivanje
avantura, korisnicima i njihovim profilima.

## Tipovi korisnika

Sistem razlikuje sledeće vrste korisnika:\
● **Neautentifikovani korisnici**: imaju mogućnost da pretražuju vikendice,
brodove/čamce, ture sa instruktorom, da se registruju i, ako su već
registrovani, da vrše prijavu na sistem.\
● **Registrovani korisnik (klijent)**: može da rezerviše entitet (vikendicu,
brod, instruktora), otkaže rezervaciju najkasnije 3 dana pre početka
korišćenja usluge, ima uvid u zakazane avanture, piše žalbe i revizije
rezervacija. Ima svoj profil u kojem se beleži istorija zakazivanja. Korisnik
nema prava pristupa profilima drugih korisnika sistema.


## Implementirani funkcionalni zahtevi
### 1. Prikaz informacija neautentifikovanim korisnicima
Korisnici koji nisu autentifikovani imaju prava pristupa stranici za registraciju i
prijavu na sistem, mogu samo da pretražuju entitete, ali nemaju mogućnost da
prave rezervacije i nemaju svoj profil. Nemaju prava pristupa ostalima naprednim
funkcionalnostima sistema. Za uspešnu implementaciju, potrebno je obezbediti
zaštitu i na serverskoj i na klijentskoj strani.\
Prva stranica koju (neprijavljeni) korisnik vidi je početna stranica aplikacije na
kojoj se mogu odabrati prikazi svih vikendica/brodova/instruktora i preći na
stranicu za registraciju/prijavu na sistem.\
Profil stranica vikendice: prikazuju se osnovni podaci o vikendici kao što su naziv,
adresa, promotivni opis, prosečna ocena. Takođe, neregistrovani korisnici imaju
mogućnost pretrage vikendica po različitim parametrima. Prilikom prikaza
rezultata pretrage, za svaku vikendicu potrebno je prikazati informacije o njoj.\
Profil stranica broda: prikazuju se osnovni podaci o brodu kao što su naziv,
adresa, promotivni opis, prosečna ocena, informacije o slobodnim terminima,
prikaz cenovnika i dodatnih usluga koje se uz rezervaciju mogu koristiti. Takođe,
neregistrovani korisnici imaju mogućnost pretrage brodova po različitim
parametrima. Prilikom prikaza rezultata pretrage, za svaki brod potrebno je
prikazati informacije o njemu.\
Profil stranica instruktora pecanja: prikazuju se osnovni podaci o avanturi koju
instruktor pruža kao što su naziv, adresa, promotivni opis, prosečna ocena,
informacije o instruktoru, itd. Takođe, neregistrovani korisnici imaju mogućnost
pretrage instruktora/avantura po različitim parametrima. Prilikom prikaza
rezultata pretrage, za svaki rezultat potrebno je prikazati informacije o njemu.

### 2. Registracija klijenata i prijava na sistem
Na stranici za registraciju/prijavu na sistem pomoću korisnikove email adrese i
lozinke može se izvršiti prijava.
Ukoliko korisnik još uvek nije registrovan na sistem, a želi da koristi beneficije
koje aplikacija pruža registrovanim korisnicima, mora prvo da se registruje na
odgovarajućoj stranici. Registracija obuhvata unos email adrese, lozinke, imena,
prezimena, adrese prebivališta, grada, države i broja telefona. Lozinka se unosi u
dva polja da bi se otežalo pravljenje grešaka prilikom odabira nove lozinke.
Nakon popunjavanja neophodnih podataka, na datu email adresu šalje se link za
aktivaciju korisnika. Korisnik ne može da se prijavi na aplikaciju dok se njegov
nalog ne aktivira posećivanjem linka koji je dobio u emailu.

### 3. Profil klijenta
Registrovani korisnik u mogućnosti je da ažurira svoje lične podatke na stranici
za prikaz svog profila. Izmena email adrese nije moguća. Na svom profilu,
korisnik može da vidi svoje poene kao i kategoriju korisnika kojoj pripada i
pogodnosti koje ima (odnosi se na loyalty program).

### 4. Home page za klijenta
Na osnovnoj stranici za autentifikovanog klijenta dostupni su linkovi za:\
● listu vikendica u sistemu - vikendice mogu biti sortirane po nazivu, lokaciji,
oceni…,\
● listu brodova u sistemu - brodovi mogu biti sortirane po nazivu, lokaciji,
oceni…,\
● listu instruktora i njihovih usluga u sistemu - instruktori mogu biti sortirani
po imenu, lokaciji, oceni…,\
● istoriju rezervacija vikendica - može biti sortirana po datumu, ceni,
trajanju...,\
● istoriju rezervacija brodova - može biti sortirana po datumu, ceni,
trajanju...,\
● istoriju rezervacija usluga instruktora - može biti sortirana po datumu, ceni,
trajanju...,\
● uvid u zakazane rezervacije koje se još nisu održale - otkazivanje je
moguće najkasnije 3 dana do početka,\
● uvid u penale - ukoliko klijent dobije 3 penala, ne može da izvrši
rezervacije. Penali se brišu svakog prvog dana u mesecu,\
● listu entiteta na čije akcije je pretplaćen,\
● stranicu za pisanje žalbe,\
● profil korisnika sa opcijom za zahtev za brisanje naloga.

### 5. Postupak rezervacije (klijent) - obična rezervacija
**Korak 1**: Registrovani klijent unosi entitet i datum i vreme za koje želi da izvrši
rezervaciju, broj dana, broj gostiju, itd. (stavka 3.20).\
**Korak 2**: Prikazuje se lista svih selektovanih entiteta koji su u tom terminu
slobodni. Lista rezultata se može sortirati po ceni i oceni. Za svaku stavku
rezultata je potrebno prikazati osnovne podatke, ocenu i cenu. Dodatne
informacije koje se mogu prikazati u sklopu rezultata ostavljaju se na izbor
studentima.\
**Korak 3**: Korisniku se prikazuju dodatne usluge koje vlasnik/instruktor nudi koje
su dostupne da ih doda na svoju rezervaciju.\
**Korak 4**: Klijent na mejl dobija potvrdu o rezervaciji.

### 6. Postupak rezervisanja entiteta na akciji (klijent)
Na stranici entiteta postoji link ka listi akcija. Svaka ponuda iz liste ima podatak o
datumu, satnici, originalnoj ceni i popustu. Ova opcija predstavlja brzu
rezervaciju jednim klikom i menja ceo postupak rezervacije opisan u sekciji 3.17.
Klijent na mejl dobija potvrdu o rezervaciji

### 7. Postupak otkazivanja rezervacije
Klijent iz liste budućih rezervacija može da otkaže rezervaciju najkasnije 3 dana
do početka. Nakon otkazivanja, potrebno je omogućiti drugom klijentu da napravi
rezervaciju u istom terminu. Klijent može samo jednom da rezerviše isti entitet u
isto vreme.

### 8. Pretraga i filtriranje entiteta
Na stranici koja prikazuje odgovarajuću listu entiteta postoji opcija za pretragu
gde je potrebno uneti datum za koji klijent želi da napravi rezervaciju. Kao
dodatni kriterijumi pretrage mogu se postaviti i lokacija, ocena,... Rezultat
pretrage predstavljaju slobodni entiteti koji za uneti datum imaju raspoložive
termine. Za svaku stavku rezultata prikazani su naziv, prosečna ocena, adresa i
cena. Dodatne informacije koje se mogu prikazati u sklopu rezultata ostavljaju
se na izbor studentima. Rezultate pretrage moguće je filtirirati po proizvoljnim
kriterijumima.

### 9. Postupak ocenjivanja
Korisnik može, na svojoj početnoj stranici, u istoriji rezervacija, uneti ocenu i
reviziju za:\
● vikendicu i vlasnika vikendice (samo ukoliko je imao bar jednu rezervaciju
te vikendice kod tog vlasnika),\
● broda i vlasnika broda (samo ukoliko je imao bar jednu rezervaciju tog
broda kod tog vlasnika),\
● instruktora (samo ukoliko je imao bar jednu rezervaciju avanture/časa
pecanja kod tog instruktora).\

### 10. Postupak pretplate/odjave na akcije
Na stranici profila vikendice, broda ili instruktora, korisnik može da se pretplati na
akcije koje vlasnici/instruktor objavljuju.
Korisnik na svom profilu ima listu entiteta na čije akcije je pretplaćen. U svakom
trenutku, korisnik može da otkaže pretplatu. Nakon otkazivanja, korisniku se više
ne šalju email notifikacije o novim akcijama.

### 11. Postupak pisanja i odgovaranja na žalbe
Klijent može da piše žalbu za:\
● vikendicu i vlasnika vikendice (samo ukoliko je imao bar jednu rezervaciju
te vikendice kod tog vlasnika),\
● broda i vlasnika broda (samo ukoliko je imao bar jednu rezervaciju tog
broda kod tog vlasnika),\
● instruktora (samo ukoliko je imao bar jednu rezervaciju avanture/časa
pecanja kod tog instruktora).

### 12.  Postupak podnošenja zahteva za brisanje naloga
Svi korisnici mogu da pošalju zahtev za brisanje naloga. Tekst zahteva unosi se
u slobodnoj formi. Administrator sistema vidi sve zahteve koje može da odobri ili
odbije. Odgovori se unose u slobodnoj formi i šalju se na email.


### Tehnologije korišćene: Angular, Java, Spring Framework, PostgreSQL
