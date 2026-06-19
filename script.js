// 사장님의 순정 3대장 데이터 + 초호화 4대장(반찬 및 요리) 칩셋 결합 완벽 납땜
const recipeDatabase = [
  {
    "id": "kimchi",
    "title": "🥢 Dynamic Authentic Kimchi",
    "desc": "The ultimate global guide to making traditional, crisp, and robust Korean Kimchi from scratch.",
    "amazonProduct": "Premium Korean Red Pepper Flakes (Gochugaru) - Authentic Grade",
    "amazonLink": "https://amzn.to/3XmABC1",
    "ingredients": [
      "Napa Cabbage (1 Large Head)",
      "Korean Red Pepper Flakes (Gochugaru - Essential Amazon Match)",
      "Fish Sauce (3 tbsp)",
      "Minced Garlic (4 tbsp)",
      "Fresh Ginger (1 tbsp)",
      "Salt and Green Onions"
    ],
    "steps": [
      "Cut the Napa cabbage into quarters and salt it thoroughly for 2-3 hours until soft.",
      "Rinse the cabbage under cold water 3 times and drain the excess water completely.",
      "Mix Gochugaru, fish sauce, minced garlic, and ginger to create the dynamic flavor paste.",
      "Spread the paste evenly between each leaf of the cabbage.",
      "Store in an airtight container at room temperature for 1 day, then move to the fridge."
    ]
  },
  {
    "id": "pajeon",
    "title": "🥞 Crispy Scallion Pancake (Pajeon)",
    "desc": "Super crunchy, savory, and loaded with fresh scallions. The perfect rainy day comfort food.",
    "amazonProduct": "CJ Beksul Crispy Korean Pancake Mix Flour (Premium)",
    "amazonLink": "https://amzn.to/3QmXYZ2",
    "ingredients": [
      "Premium Korean Pancake Mix (Amazon Match for extreme crispiness)",
      "Fresh Scallions / Green Onions (1 Bunch)",
      "Cold Water (200ml)",
      "Vegetable Oil for frying",
      "Optional: Seafood Mix (Shrimp, Squid)"
    ],
    "steps": [
      "Mix the Korean pancake flour with ice-cold water to build the ultimate crispy batter.",
      "Cut fresh scallions to match the size of your frying pan.",
      "Heat a generous amount of oil in a skillet over medium-high heat (Crucial for crispiness).",
      "Lay the scallions down, pour the batter over them, and add seafood if desired.",
      "Fry until the bottom is deeply golden brown, flip, and cook the other side until crispy."
    ]
  },
  {
    "id": "eomuk",
    "title": "🍲 Street-Style Fish Cake Soup (Eomuk-tang)",
    "desc": "A warm, comforting, and deeply savory broth paired with authentic skewered fish cakes.",
    "amazonProduct": "Premium Dried Anchovy & Kelp Soup Base Seafood Packets",
    "amazonLink": "https://amzn.to/3Zk1234",
    "ingredients": [
      "Korean Fish Cakes (Eomuk - Skewered or sliced)",
      "Korean Radish (Sliced for sweet broth flavor)",
      "Dried Anchovy & Kelp Broth Base (Amazon Match for instant deep taste)",
      "Soy Sauce (2 tbsp)",
      "Green Onions and Red Pepper for garnish"
    ],
    "steps": [
      "Boil water with the Anchovy & Kelp soup base packet and sliced radish for 15-20 minutes.",
      "Remove the broth packet once the radish turns slightly translucent.",
      "Fold the fish cakes onto wooden skewers or cut them into bite-sized pieces.",
      "Place the fish cakes into the boiling broth and season with soy sauce.",
      "Simmer for 5-10 minutes until the fish cakes expand and absorb the rich soup. Serve hot!"
    ]
  },
  {
    "id": "kongnamul",
    "title": "🎨 Seasoned Bean Sprouts (Kongnamul-muchim)",
    "desc": "A popular, nutty, and non-spicy traditional side dish (Banchan) that highlights the true essence of Korean home cooking.",
    "amazonProduct": "Premium Pure Toasted Sesame Oil (Deep Flavor Grade)",
    "amazonLink": "https://amzn.to/47D4M1A", // 임시 프리미엄 참기름 주소 배선
    "ingredients": [
      "Fresh Soy Bean Sprouts (1 lb)",
      "Pure Toasted Sesame Oil (Amazon Match for rich aroma)",
      "Toasted Sesame Seeds (1 tsp)",
      "Minced Garlic (0.5 tbsp)",
      "Salt and Chopped Green Onions"
    ],
    "steps": [
      "Rinse bean sprouts in cold water and remove any loose skins.",
      "Boil them in a covered pot with a pinch of salt for exactly 4 minutes (Do not open the lid!).",
      "Drain immediately and shock them in ice water to maintain a crunchy texture.",
      "Squeeze out excess water gently, then toss with garlic, salt, and green onions.",
      "Finish with a generous drizzle of Amazon premium sesame oil and toasted sesame seeds."
    ]
  },
  {
    "id": "gamjajorim",
    "title": "🍳 Sweet & Savory Braised Potatoes (Gamja-jorim)",
    "desc": "An addictive, sweet, and savory potato side dish glazed to perfection. Extremely popular among international fans.",
    "amazonProduct": "Chung Jung One Naturally Brewed Premium Soy Sauce",
    "amazonLink": "https://amzn.to/3DeS123", // 임시 간장 주소 배선
    "ingredients": [
      "Potatoes (3 Medium, cubed)",
      "Premium Korean Soy Sauce (Amazon Match for depth of flavor)",
      "Rice Syrup or Corn Syrup (2 tbsp for shiny glaze)",
      "Vegetable Oil (1 tbsp)",
      "Water (1 cup) and Sesame Seeds"
    ],
    "steps": [
      "Peel potatoes and cut them into 1-inch cubes. Soak in cold water for 10 minutes to remove starch.",
      "Heat vegetable oil in a pan and stir-fry the potato cubes for 3 minutes until slightly translucent.",
      "Pour in water and premium soy sauce, bring to a boil, then lower heat to medium.",
      "Simmer for 10-12 minutes until the potatoes are soft and the liquid reduces.",
      "Add the rice syrup for that signature glassy shine, crank heat up for 1 minute, and sprinkle sesame seeds."
    ]
  },
  {
    "id": "bulgogi",
    "title": "🔥 Classic Korean Beef Bulgogi",
    "desc": "The king of Korean BBQ. Thinly sliced beef marinated in a sweet and savory pear-infused soy sauce glaze.",
    "amazonProduct": "Chung Jung One Premium Korean BBQ Bulgogi Marinade Sauce",
    "amazonLink": "https://amzn.to/3Bu1245", // 임시 불고기 소스 주소 배선
    "ingredients": [
      "Thinly Sliced Beef Ribeye or Top Sirloin (1 lb)",
      "Authentic Bulgogi Marinade Sauce (Amazon Match for instant restaurant taste)",
      "Onion (Sliced)",
      "Carrot (Julienned)",
      "Green Onions and Sesame Oil"
    ],
    "steps": [
      "Slightly pat the beef slices with a paper towel to remove excess blood.",
      "Toss the beef with onion and carrot slices in a large mixing bowl.",
      "Pour in the premium Amazon bulgogi marinade sauce and mix thoroughly by hand.",
      "Let it marinate in the fridge for at least 30 minutes (Overnight is best).",
      "Heat a skillet over high heat and stir-fry the beef rapidly until fully cooked and caramelized."
    ]
  },
  {
    "id": "tteokbokki",
    "title": "🥣 Spicy Rice Cakes (Tteokbokki)",
    "desc": "Korea's ultimate street food sensation. Chewy rice cakes cooked in a sweet, fiery, and addictive Gochujang sauce.",
    "amazonProduct": "Chung Jung One Sunchang Traditional Gochujang (Hot Pepper Paste)",
    "amazonLink": "https://amzn.to/3Go1267", // 임시 고추장 주소 배선
    "ingredients": [
      "Korean Rice Cakes (Tteokbokki-tteok, 1 lb)",
      "Traditional Gochujang Hot Pepper Paste (Amazon Match for rich texture)",
      "Korean Red Pepper Flakes (Gochugaru, 1 tbsp)",
      "Sugar or Corn Syrup (2 tbsp)",
      "Fish Cakes (Eomuk, sliced) and Water (2.5 cups)"
    ],
    "steps": [
      "Soak the rice cakes in warm water for 10 minutes to make them extra chewy.",
      "Boil water in a shallow pan and dissolve the Gochujang, Gochugaru, and sugar completely.",
      "Add the rice cakes and sliced fish cakes into the boiling sweet-spicy sauce.",
      "Reduce heat to medium and simmer for 8-10 minutes, stirring constantly so the cakes don't stick.",
      "Once the sauce thickens and coat the rice cakes perfectly, garnish with green onions and serve."
    ]
  }
];

const cardsContainer = document.getElementById("cards");
const detailBox = document.getElementById("detailBox");
const detailContent = document.getElementById("detailContent");
const searchInput = document.getElementById("searchInput");

function initKFoodEngine(filter = "") {
  if (!cardsContainer) return;
  cardsContainer.innerHTML = "";

  recipeDatabase.forEach(function(recipe) {
    if (recipe.title.toLowerCase().includes(filter.toLowerCase()) || 
        recipe.desc.toLowerCase().includes(filter.toLowerCase())) {
      
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${recipe.title}</h3>
        <p>${recipe.desc}</p>
        <button class="viewBtn">View Full Recipe & Ingredients</button>
      `;

      const btn = card.querySelector(".viewBtn");
      btn.addEventListener("click", function() {
        showRecipeDetail(recipe);
      });

      cardsContainer.appendChild(card);
    }
  });
}

function showRecipeDetail(recipe) {
  if (!detailContent || !detailBox) return;

  const ingList = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
  const stepList = recipe.steps.map((s, idx) => `<li><strong>Step ${idx+1}:</strong> ${s}</li>`).join("");

  detailContent.innerHTML = `
    <h2 style="margin-top:0; color:#0f172a; font-size:1.8rem;">${recipe.title}</h2>
    <p style="color:#475569; font-size:1.1rem; line-height:1.6; margin-bottom:25px;">${recipe.desc}</p>
    
    <div style="background: #fffbeb; border: 2px dashed #f59e0b; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
      <h4 style="margin:0 0 8px 0; color:#d97706; font-size:1.1rem; font-weight:bold;">💡 Essential Secret Ingredient For This Recipe:</h4>
      <p style="margin:0 0 15px 0; font-size:1rem; color:#1e293b; font-weight:600;">${recipe.amazonProduct}</p>
      <a href="${recipe.amazonLink}" target="_blank" style="display:inline-block; background:#f59e0b; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:8px; font-weight:bold; box-shadow:0 4px 6px -1px rgba(245,158,11,0.3);">Shop This Ingredient On Amazon →</a>
    </div>

    <div style="background:#f1f5f9; padding:10px; text-align:center; color:#94a3b8; font-size:0.8rem; margin:20px 0; border-radius:6px; font-weight:bold;">
      ADVERTISEMENT <br> (In-Article Ad Slot)
    </div>

    <h3 style="color:#0f172a; border-bottom:2px solid #e2e8f0; padding-bottom:8px;">Ingredients Needed</h3>
    <ul style="line-height:1.8; color:#334155; padding-left:20px; font-size:1.05rem;">${ingList}</ul>

    <h3 style="color:#0f172a; border-bottom:2px solid #e2e8f0; padding-bottom:8px; margin-top:30px;">Step-by-Step Instructions</h3>
    <ol style="line-height:2; color:#334155; padding-left:20px; font-size:1.05rem; display:flex; flex-direction:column; gap:10px;">${stepList}</ol>
  `;

  detailBox.style.display = "block";
  detailBox.scrollIntoView({ behavior: "smooth" });
}

if (searchInput) {
  searchInput.addEventListener("input", function() {
    initKFoodEngine(searchInput.value);
  });
}

initKFoodEngine();