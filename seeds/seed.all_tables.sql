BEGIN;

TRUNCATE
  users,
  foods,
  drinks
  RESTART IDENTITY CASCADE;

INSERT INTO users (email, password)
VALUES
  /* testuser@partywall.com password: partyhardy */
  ('testuser@partywall.com', '$2a$10$0HX47barxA2SOaJIvpLrpeCe9X2bziJOLC8vF2TxqZueDzQ9F5dZ6'),
  ('gamerdude22@test.com', '$2a$12$Pkxp8JTF90HG6gYbIKJiiuzPjBHSOcpe1oUY6c1ESHcZ0ISUHmm0K'),
  ('lonelygamer69@test.com', '$2a$12$Pkxp8JTF90HG6gYbIKJiiuzPjBHSOcpe1oUY6c1ESHcZ0ISUHmm0K'),
  ('player63@test.com', '$2a$12$Pkxp8JTF90HG6gYbIKJiiuzPjBHSOcpe1oUY6c1ESHcZ0ISUHmm0K'),
  ('iliketrains@test.com', '$2a$12$Pkxp8JTF90HG6gYbIKJiiuzPjBHSOcpe1oUY6c1ESHcZ0ISUHmm0K'),     
  ('player3@test.com', '$2a$12$Pkxp8JTF90HG6gYbIKJiiuzPjBHSOcpe1oUY6c1ESHcZ0ISUHmm0K'),
  ('yellowbanana@test.com', '$2a$12$Pkxp8JTF90HG6gYbIKJiiuzPjBHSOcpe1oUY6c1ESHcZ0ISUHmm0K');

INSERT INTO foods (name, description, weight, price, quantity)
VALUES
  ('Hors doeuvres', 'Small appetizer served cold', 1, 20, 24),
  ('Burgers', 'Beef Burger Entree', 6, 24, 10),
  ('Chicken Alfredo', 'Pasta Entree', 5, 24, 10),
  ('Beef Sliders', 'Hearty beef appetizer', 2, 12, 12);

INSERT INTO drinks (name, volume, price, quantity)
VALUES
  ('Water', 12, 0, 12),
  ('Soda', 12, 6, 12),
  ('Margaritas', 6, 16, 8),
  ('Domestic Beer', 12, 12, 8),
  ('Imported Beer', 12, 16, 8),
  ('Champagne', 4, 16, 8);

COMMIT;
