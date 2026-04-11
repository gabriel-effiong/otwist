-- Seed Categories
INSERT INTO public.categories (name, description, image_url, display_order) VALUES
  ('Appetizers', 'Start your meal with our delicious starters', '/images/categories/appetizers.jpg', 1),
  ('Main Courses', 'Hearty and satisfying entrees', '/images/categories/mains.jpg', 2),
  ('Catering Platters', 'Perfect for events and gatherings', '/images/categories/catering.jpg', 3),
  ('Desserts', 'Sweet endings to your meal', '/images/categories/desserts.jpg', 4),
  ('Beverages', 'Refreshing drinks and cocktails', '/images/categories/beverages.jpg', 5)
ON CONFLICT DO NOTHING;

-- Seed Menu Items
INSERT INTO public.menu_items (category_id, name, description, price, is_featured, serves_count, prep_time_minutes, dietary_tags) VALUES
  -- Appetizers
  ((SELECT id FROM public.categories WHERE name = 'Appetizers'), 'Crispy Calamari', 'Tender calamari rings with house-made marinara', 14.99, true, 2, 15, ARRAY['seafood']),
  ((SELECT id FROM public.categories WHERE name = 'Appetizers'), 'Bruschetta Trio', 'Classic tomato, mushroom truffle, and olive tapenade', 12.99, false, 2, 10, ARRAY['vegetarian']),
  ((SELECT id FROM public.categories WHERE name = 'Appetizers'), 'Spicy Wings', 'Crispy chicken wings with signature orange glaze', 13.99, true, 2, 20, ARRAY['spicy', 'gluten-free']),
  ((SELECT id FROM public.categories WHERE name = 'Appetizers'), 'Stuffed Mushrooms', 'Portobello caps with herb cream cheese', 11.99, false, 2, 15, ARRAY['vegetarian']),
  
  -- Main Courses
  ((SELECT id FROM public.categories WHERE name = 'Main Courses'), 'Grilled Ribeye Steak', '12oz premium ribeye with herb butter', 42.99, true, 1, 25, ARRAY['gluten-free']),
  ((SELECT id FROM public.categories WHERE name = 'Main Courses'), 'Pan-Seared Salmon', 'Atlantic salmon with citrus beurre blanc', 34.99, true, 1, 20, ARRAY['seafood', 'gluten-free']),
  ((SELECT id FROM public.categories WHERE name = 'Main Courses'), 'Chicken Marsala', 'Tender chicken breast in marsala wine sauce', 28.99, false, 1, 25, ARRAY[]::TEXT[]),
  ((SELECT id FROM public.categories WHERE name = 'Main Courses'), 'Vegetable Risotto', 'Creamy arborio rice with seasonal vegetables', 24.99, false, 1, 30, ARRAY['vegetarian', 'gluten-free']),
  ((SELECT id FROM public.categories WHERE name = 'Main Courses'), 'Lobster Pasta', 'Maine lobster tail over fresh linguine', 48.99, true, 1, 25, ARRAY['seafood']),
  
  -- Catering Platters
  ((SELECT id FROM public.categories WHERE name = 'Catering Platters'), 'Executive Lunch Box', 'Individual boxed meals with salad, entree, and dessert', 29.99, true, 1, 45, ARRAY[]::TEXT[]),
  ((SELECT id FROM public.categories WHERE name = 'Catering Platters'), 'Mediterranean Platter', 'Hummus, falafel, pita, and grilled vegetables', 89.99, true, 10, 60, ARRAY['vegetarian']),
  ((SELECT id FROM public.categories WHERE name = 'Catering Platters'), 'Premium Meat Board', 'Assorted cured meats, cheeses, and accompaniments', 149.99, true, 15, 30, ARRAY[]::TEXT[]),
  ((SELECT id FROM public.categories WHERE name = 'Catering Platters'), 'Seafood Tower', 'Oysters, shrimp, crab claws, and lobster tails', 249.99, true, 8, 45, ARRAY['seafood', 'gluten-free']),
  ((SELECT id FROM public.categories WHERE name = 'Catering Platters'), 'BBQ Feast', 'Smoked brisket, ribs, chicken, and all the fixings', 199.99, false, 12, 90, ARRAY['gluten-free']),
  
  -- Desserts
  ((SELECT id FROM public.categories WHERE name = 'Desserts'), 'Chocolate Lava Cake', 'Warm chocolate cake with molten center', 12.99, true, 1, 15, ARRAY['vegetarian']),
  ((SELECT id FROM public.categories WHERE name = 'Desserts'), 'Tiramisu', 'Classic Italian coffee-flavored dessert', 10.99, false, 1, 10, ARRAY['vegetarian']),
  ((SELECT id FROM public.categories WHERE name = 'Desserts'), 'Crème Brûlée', 'Vanilla custard with caramelized sugar top', 11.99, true, 1, 10, ARRAY['vegetarian', 'gluten-free']),
  ((SELECT id FROM public.categories WHERE name = 'Desserts'), 'Dessert Platter', 'Assorted mini desserts for sharing', 45.99, false, 6, 15, ARRAY['vegetarian']),
  
  -- Beverages
  ((SELECT id FROM public.categories WHERE name = 'Beverages'), 'Fresh Lemonade', 'House-made with a hint of orange', 4.99, false, 1, 5, ARRAY['vegan', 'gluten-free']),
  ((SELECT id FROM public.categories WHERE name = 'Beverages'), 'Sparkling Water', 'San Pellegrino 750ml', 6.99, false, 2, 2, ARRAY['vegan', 'gluten-free']),
  ((SELECT id FROM public.categories WHERE name = 'Beverages'), 'Signature Cocktail', 'The Ostwise Orange - vodka, triple sec, fresh orange', 14.99, true, 1, 5, ARRAY[]::TEXT[]),
  ((SELECT id FROM public.categories WHERE name = 'Beverages'), 'Beverage Service Package', 'Coffee, tea, and soft drinks for your event', 5.99, false, 1, 10, ARRAY['vegan'])
ON CONFLICT DO NOTHING;
