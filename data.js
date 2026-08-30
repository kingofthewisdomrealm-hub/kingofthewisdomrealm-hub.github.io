const PROTEINS = [
  { id: "beef", name: "Ground Beef", cut: "80/20, loose", emo: "\uD83E\uDD69", cal: 430, protein: 37, cost: 3.40, time: 12, sear: "Leave it alone until a brown crust forms. Then break it up." },
  { id: "chicken", name: "Chicken Thigh", cut: "boneless, 1-inch pieces", emo: "\uD83C\uDF57", cal: 320, protein: 40, cost: 2.80, time: 14, sear: "Skinless is fine. Get color on two sides before you stir." },
  { id: "turkey", name: "Ground Turkey", cut: "93% lean", emo: "\uD83E\uDD83", cal: 300, protein: 42, cost: 2.60, time: 12, sear: "Needs fat. Start with oil and don't steam it in a crowded pan." },
  { id: "pork", name: "Pork Shoulder", cut: "small cubes or ground", emo: "\uD83D\uDC37", cal: 380, protein: 36, cost: 2.90, time: 14, sear: "Brown hard. Pork gets sweet once the edges caramelize." },
  { id: "shrimp", name: "Shrimp", cut: "peeled, patted dry", emo: "\uD83E\uDD90", cal: 200, protein: 42, cost: 6.20, time: 8, sear: "High heat, 60-90 seconds a side. Pull them before they curl tight." },
  { id: "salmon", name: "Salmon", cut: "1-inch cubes, skin off", emo: "\uD83D\uDC1F", cal: 420, protein: 46, cost: 7.40, time: 10, sear: "Don't flip early. The cube should release when the crust is ready." },
  { id: "eggs", name: "Eggs", cut: "6 large, room temp", emo: "\uD83E\uDD5A", cal: 280, protein: 24, cost: 1.50, time: 7, sear: "Soft-scramble into the vegetables at the end, off the highest heat." }
];
const VEG = [
  { id: "broccoli", name: "Broccoli", cut: "small florets", emo: "\uD83E\uDD66", cal: 68, protein: 6, fiber: 5.2, cost: 1.20, firm: true },
  { id: "spinach", name: "Spinach", cut: "whole leaves", emo: "\uD83E\uDD6C", cal: 46, protein: 6, fiber: 4.4, cost: 1.50, firm: false },
  { id: "zucchini", name: "Zucchini", cut: "half-moons, 1/2 inch", emo: "\uD83E\uDD52", cal: 38, protein: 3, fiber: 2.2, cost: 1.10, firm: false },
  { id: "peppers", name: "Bell Peppers", cut: "thin strips", emo: "\uD83E\uDED1", cal: 62, protein: 2, fiber: 4.0, cost: 1.40, firm: true },
  { id: "mushrooms", name: "Mushrooms", cut: "thick slices", emo: "\uD83C\uDF44", cal: 50, protein: 6, fiber: 2.0, cost: 1.80, firm: true },
  { id: "cabbage", name: "Cabbage", cut: "ribbons", emo: "\uD83E\uDD6C", cal: 50, protein: 3, fiber: 4.6, cost: 0.70, firm: true },
  { id: "onion", name: "Onion", cut: "thin slices", emo: "\uD83E\uDDC5", cal: 80, protein: 2, fiber: 3.4, cost: 0.60, firm: true },
  { id: "greenbeans", name: "Green Beans", cut: "1-inch pieces", emo: "\uD83E\uDED8", cal: 70, protein: 4, fiber: 6.0, cost: 1.20, firm: true },
  { id: "cauliflower", name: "Cauliflower", cut: "small florets", emo: "\uD83E\uDD0D", cal: 50, protein: 4, fiber: 4.0, cost: 1.30, firm: true },
  { id: "carrots", name: "Carrots", cut: "thin coins", emo: "\uD83E\uDD55", cal: 82, protein: 2, fiber: 5.6, cost: 0.80, firm: true }
];
const FLAVORS = [
  { id: "mexican", name: "Mexican", style: "Cumin \u00b7 chili \u00b7 lime", emo: "\uD83C\uDF2E", spices: ["1.5 tsp cumin", "1 tsp chili powder", "2 garlic cloves", "0.5 tsp oregano"], fat: "1 tbsp oil", liquid: "2 tbsp water or stock to bloom the spices", finish: "Lime and a pinch of salt", spicy: true, note: "Bloom the chili in fat until it smells toasted, not dusty. Lime at the end, never in the fry." },
  { id: "italian", name: "Italian", style: "Garlic \u00b7 oregano \u00b7 chili flake", emo: "\uD83C\uDDEE\uD83C\uDDF9", spices: ["3 garlic cloves", "1 tsp oregano", "0.5 tsp chili flake", "pinch basil"], fat: "1.5 tbsp olive oil", liquid: "2 tbsp crushed tomato or splash of pasta water", finish: "Parsley and a thread of olive oil", spicy: false, note: "Garlic goes in after the protein browns. If it burns, the whole pan tastes bitter." },
  { id: "puertorican", name: "Puerto Rican", style: "Sofrito \u00b7 adobo \u00b7 sazon", emo: "\uD83C\uDDF5\uD83C\uDDF7", spices: ["3 tbsp sofrito", "1 tsp adobo", "0.5 tsp sazon", "0.5 tsp oregano"], fat: "1 tbsp oil", liquid: "2 tbsp stock or water", finish: "Cilantro and a squeeze of sour orange or lime", spicy: false, note: "Sofrito is the sauce. Let it fry until the raw onion smell turns sweet." },
  { id: "greek", name: "Greek", style: "Oregano \u00b7 lemon \u00b7 garlic", emo: "\uD83C\uDDEC\uD83C\uDDF7", spices: ["1 tsp oregano", "2 garlic cloves", "lemon zest", "pinch dill"], fat: "1.5 tbsp olive oil", liquid: "1 tbsp lemon juice at the end", finish: "More lemon and a little extra oil", spicy: false, note: "Lemon juice goes off heat. Zest can ride the last minute in the pan." },
  { id: "indian", name: "Indian", style: "Cumin \u00b7 turmeric \u00b7 garam masala", emo: "\uD83C\uDDEE\uD83C\uDDF3", spices: ["1 tsp cumin", "0.5 tsp turmeric", "1 tsp garam masala", "2 garlic cloves"], fat: "1.5 tbsp oil or ghee", liquid: "2-3 tbsp water after the spices bloom", finish: "Cilantro and a squeeze of lemon", spicy: true, note: "Spices need fat and 30 seconds. If they scorch, start the seasoning over." },
  { id: "cajun", name: "Cajun", style: "Paprika \u00b7 thyme \u00b7 heat", emo: "\uD83C\uDF36", spices: ["2 tsp Cajun spice", "1 tsp paprika", "2 garlic cloves", "0.5 tsp thyme"], fat: "1 tbsp oil", liquid: "splash of stock to loosen the fond", finish: "Hot sauce and scallion", spicy: true, note: "Paprika burns fast. Drop the heat before you add the spice, then toss." },
  { id: "asian", name: "Ginger-Garlic", style: "Ginger \u00b7 garlic \u00b7 soy", emo: "\uD83E\uDD62", spices: ["1 tbsp minced ginger", "3 garlic cloves", "1.5 tbsp soy", "2 scallions"], fat: "1 tbsp oil", liquid: "1 tsp soy + 1 tsp water to glaze", finish: "Sesame oil and the green tops of the scallion", spicy: false, note: "Ginger and garlic go in after the protein. Soy is the glaze, not the braise." },
  { id: "mediterranean", name: "Mediterranean", style: "Cumin \u00b7 paprika \u00b7 lemon", emo: "\uD83E\uDED2", spices: ["1 tsp oregano", "0.5 tsp cumin", "1 tsp paprika", "2 garlic cloves"], fat: "1.5 tbsp olive oil", liquid: "1 tbsp lemon + 1 tbsp water", finish: "Olive oil and lemon at the table", spicy: false, note: "This plate lives on oil and acid. Salt the vegetables so they taste like themselves." }
];
const COMBOS = [
  { id: "taco-beef", name: "Carne Picada, Peppers & Onion", hook: "Taco-shop beef with a real crust.", emo: "\uD83C\uDF2E", protein: "beef", veg: ["peppers", "onion"], flavor: "mexican", delicious: 5 },
  { id: "italian-beef", name: "Beef Sugo, Zucchini & Onion", hook: "Weeknight ragu without the pasta.", emo: "\uD83C\uDDEE\uD83C\uDDF9", protein: "beef", veg: ["zucchini", "onion"], flavor: "italian", delicious: 4 },
  { id: "sofrito-beef", name: "Sofrito Beef, Peppers & Onion", hook: "The house plate. Don't rush the sofrito.", emo: "\uD83C\uDDF5\uD83C\uDDF7", protein: "beef", veg: ["peppers", "onion"], flavor: "puertorican", delicious: 5 },
  { id: "cabbage-beef", name: "Cajun Beef & Cabbage", hook: "Diner-saute energy, better seasoning.", emo: "\uD83C\uDF72", protein: "beef", veg: ["cabbage", "onion"], flavor: "cajun", delicious: 4 },
  { id: "ginger-chicken", name: "Ginger Thighs, Broccoli & Carrot", hook: "Wok logic in a skillet.", emo: "\uD83E\uDD62", protein: "chicken", veg: ["broccoli", "carrots"], flavor: "asian", delicious: 5 },
  { id: "greek-chicken", name: "Lemon-Oregano Thighs", hook: "Bright, oily, loud with lemon.", emo: "\uD83C\uDDEC\uD83C\uDDF7", protein: "chicken", veg: ["zucchini", "peppers"], flavor: "greek", delicious: 5 },
  { id: "cajun-chicken", name: "Cajun Thighs, Pepper & Onion", hook: "Color on the chicken, then the spice.", emo: "\uD83C\uDF36", protein: "chicken", veg: ["peppers", "onion"], flavor: "cajun", delicious: 4 },
  { id: "italian-turkey", name: "Turkey, Zucchini & Garlic", hook: "Lean meat, loud oil.", emo: "\uD83C\uDDEE\uD83C\uDDF9", protein: "turkey", veg: ["zucchini", "spinach"], flavor: "italian", delicious: 4 },
  { id: "taco-turkey", name: "Turkey Picadillo", hook: "Lighter than beef, still wants lime.", emo: "\uD83C\uDF2E", protein: "turkey", veg: ["peppers", "onion"], flavor: "mexican", delicious: 4 },
  { id: "med-turkey", name: "Paprika Turkey, Cauliflower", hook: "Roasty vegetables, lemon at the end.", emo: "\uD83E\uDED2", protein: "turkey", veg: ["cauliflower", "spinach"], flavor: "mediterranean", delicious: 4 },
  { id: "cajun-pork", name: "Cajun Pork & Cabbage", hook: "Sweet pork, bitter cabbage, hot spice.", emo: "\uD83C\uDF36", protein: "pork", veg: ["cabbage", "peppers"], flavor: "cajun", delicious: 5 },
  { id: "sofrito-pork", name: "Cerdo en Sofrito", hook: "Pork and sofrito were made for each other.", emo: "\uD83C\uDDF5\uD83C\uDDF7", protein: "pork", veg: ["peppers", "onion"], flavor: "puertorican", delicious: 5 },
  { id: "ginger-pork", name: "Ginger Pork, Beans & Carrot", hook: "Glazed, not soupy.", emo: "\uD83E\uDD62", protein: "pork", veg: ["greenbeans", "carrots"], flavor: "asian", delicious: 4 },
  { id: "cajun-shrimp", name: "Cajun Shrimp Saute", hook: "Fast. Dry the shrimp or they steam.", emo: "\uD83E\uDD90", protein: "shrimp", veg: ["peppers", "zucchini"], flavor: "cajun", delicious: 5 },
  { id: "garlic-shrimp", name: "Ginger-Garlic Shrimp", hook: "Ninety seconds of courage on high heat.", emo: "\uD83E\uDD62", protein: "shrimp", veg: ["broccoli", "mushrooms"], flavor: "asian", delicious: 5 },
  { id: "greek-shrimp", name: "Lemon Shrimp, Greens & Zucchini", hook: "A taverna plate in one pan.", emo: "\uD83C\uDDEC\uD83C\uDDF7", protein: "shrimp", veg: ["spinach", "zucchini"], flavor: "greek", delicious: 4 },
  { id: "med-salmon", name: "Paprika Salmon, Spinach", hook: "Treat the cubes like steak.", emo: "\uD83E\uDED2", protein: "salmon", veg: ["spinach", "zucchini"], flavor: "mediterranean", delicious: 5 },
  { id: "ginger-salmon", name: "Soy-Ginger Salmon", hook: "Glaze last so the fish stays intact.", emo: "\uD83E\uDD62", protein: "salmon", veg: ["broccoli", "carrots"], flavor: "asian", delicious: 5 },
  { id: "cajun-salmon", name: "Cajun Salmon, Pepper & Onion", hook: "Spice after the crust, not before.", emo: "\uD83C\uDF36", protein: "salmon", veg: ["peppers", "onion"], flavor: "cajun", delicious: 4 },
  { id: "indian-eggs", name: "Masala Eggs & Spinach", hook: "Spices first, eggs last, lemon always.", emo: "\uD83C\uDDEE\uD83C\uDDF3", protein: "eggs", veg: ["spinach", "onion"], flavor: "indian", delicious: 4 },
  { id: "med-eggs", name: "Olive-Oil Eggs, Pepper & Greens", hook: "Breakfast energy, dinner salt.", emo: "\uD83E\uDED2", protein: "eggs", veg: ["spinach", "peppers"], flavor: "mediterranean", delicious: 4 },
  { id: "italian-eggs", name: "Garlic Eggs, Zucchini & Spinach", hook: "Soft curds, not rubber.", emo: "\uD83C\uDDEE\uD83C\uDDF9", protein: "eggs", veg: ["zucchini", "spinach"], flavor: "italian", delicious: 3 }
];
