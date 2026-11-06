// =====================================================================
//  TP shop-TP — Insertion (10 clients, 10 produits, 12 commandes)
//  À exécuter APRÈS la création des collections
//  pour executer sur docker, vous devez lancez sur cmd les deux lignes suivantes:
//    	> docker cp MongoDB-tp-shop-data.js <conteneur>:/tmp/MongoDB-tp-shop-data.js
//    	> docker exec -it <conteneur> mongosh /tmp/MongoDB-tp-shop-data.js
//	pour executer sur MongoDB installer en local vous devez lancez sur cmd les lignes suivantes:
//		> cd "le chemin du dossier qui contient le fichier MongoDB-tp-shop-data.js"
//		> mongosh
//		> load ("MongoDB-tp-shop-data.js")
//
// =====================================================================

const shop = db.getSiblingDB("shop_tp");

// ---------------------------------------------------------------------
// customers
//  - client 1 (Sara)  : adresse de LIVRAISON à Rabat
//  - client 2 (Omar)  : DOMICILE à Rabat, livraison à Casablanca 
//  - client 8 (Mehdi) : domicile à Témara, livraison à Rabat
// ---------------------------------------------------------------------
shop.customers.insertMany([
  { _id: 1, name: "Sara Alaoui", email: "sara.alaoui@mail.ma", age: 28,
    addresses: [ { type: "livraison", city: "Rabat", country: "MA" } ],
    loyalty: { tier: "Gold", points: 1500 }, createdAt: new Date("2025-03-10") },

  { _id: 2, name: "Omar Fassi", email: "omar.fassi@mail.ma", age: 35,
    addresses: [ { type: "domicile",  city: "Rabat",      country: "MA" },
                 { type: "livraison", city: "Casablanca", country: "MA" } ],
    loyalty: { tier: "Silver", points: 800 }, createdAt: new Date("2025-06-02") },

  { _id: 3, name: "Imane Chraibi", email: "imane.chraibi@mail.ma", age: 42,
    addresses: [ { type: "domicile",  city: "Casablanca", country: "MA" },
                 { type: "livraison", city: "Casablanca", country: "MA" } ],
    loyalty: { tier: "Gold", points: 2300 }, createdAt: new Date("2024-11-20") },

  { _id: 4, name: "Yassine El Amrani", email: "yassine.elamrani@mail.ma", age: 24,
    addresses: [ { type: "domicile", city: "Fès", country: "MA" } ],
    loyalty: { tier: "Bronze", points: 150 }, createdAt: new Date("2025-09-14") },

  { _id: 5, name: "Salma Bennis", email: "salma.bennis@mail.ma", age: 31,
    addresses: [ { type: "domicile",  city: "Marrakech", country: "MA" },
                 { type: "livraison", city: "Marrakech", country: "MA" } ],
    loyalty: { tier: "Silver", points: 1200 }, createdAt: new Date("2025-01-08") },

  { _id: 6, name: "Hamza Benjelloun", email: "hamza.benjelloun@mail.ma", age: 29,
    addresses: [ { type: "domicile", city: "Tanger", country: "MA" } ],
    loyalty: { tier: "Bronze", points: 300 }, createdAt: new Date("2025-07-21") },

  { _id: 7, name: "Nora Ziani", email: "nora.ziani@mail.ma", age: 38,
    addresses: [ { type: "livraison", city: "Agadir", country: "MA" } ],
    loyalty: { tier: "Gold", points: 900 }, createdAt: new Date("2024-12-03") },

  { _id: 8, name: "Mehdi Lahlou", email: "mehdi.lahlou@mail.ma", age: 22,
    addresses: [ { type: "domicile",  city: "Témara", country: "MA" },
                 { type: "livraison", city: "Rabat",  country: "MA" } ],
    loyalty: { tier: "Silver", points: 450 }, createdAt: new Date("2025-10-05") },

  { _id: 9, name: "Khadija Idrissi", email: "khadija.idrissi@mail.ma", age: 45,
    addresses: [ { type: "domicile", city: "Oujda", country: "MA" } ],
    loyalty: { tier: "Silver", points: 600 }, createdAt: new Date("2025-02-17") },

  { _id: 10, name: "Amine Tazi", email: "amine.tazi@mail.ma", age: 33,
    addresses: [ { type: "domicile",  city: "Meknès", country: "MA" },
                 { type: "livraison", city: "Fès",    country: "MA" } ],
    loyalty: { tier: "Bronze", points: 50 }, createdAt: new Date("2025-08-30") }
]);

// ---------------------------------------------------------------------
// products
//  - stock < stockMin : 102, 103, 107 
//  - 104 : sans le mot-clé « ergonomique » 
//  - 109 : avec le mot-clé « papier » 
//  - « bureau » dans le nom : 103, 104, 105
// ---------------------------------------------------------------------
shop.products.insertMany([
  { _id: 101, name: "Ordinateur portable", category: "Électronique", price: 8990,
    stock: 12, stockMin: 5, tags: ["ordinateur", "portable"], rating: 4.5 },
  { _id: 102, name: "Écran 27 pouces", category: "Électronique", price: 2490,
    stock: 3, stockMin: 5, tags: ["écran", "bureau"], rating: 4.3 },
  { _id: 103, name: "Bureau d'angle", category: "Mobilier", price: 3200,
    stock: 2, stockMin: 3, tags: ["bureau", "bois"], rating: 4.1 },
  { _id: 104, name: "Chaise de bureau", category: "Mobilier", price: 1290,
    stock: 8, stockMin: 4, tags: ["chaise", "bureau"], rating: 4.2 },
  { _id: 105, name: "Lampe de bureau LED", category: "Accessoires", price: 249.5,
    stock: 25, stockMin: 10, tags: ["lampe", "led", "bureau"], rating: 4.0 },
  { _id: 106, name: "Clavier sans fil", category: "Électronique", price: 390,
    stock: 40, stockMin: 15, tags: ["clavier", "sans fil"], rating: 3.9 },
  { _id: 107, name: "Souris ergonomique", category: "Accessoires", price: 199,
    stock: 6, stockMin: 10, tags: ["souris", "ergonomique"], rating: 4.4 },
  { _id: 108, name: "Casque audio", category: "Électronique", price: 690,
    stock: 15, stockMin: 5, tags: ["casque", "audio"], rating: 4.6 },
  { _id: 109, name: "Ramette papier A4", category: "Papeterie", price: 45,
    stock: 200, stockMin: 50, tags: ["papier", "A4"], rating: 4.7 },
  { _id: 110, name: "Carnet de notes", category: "Papeterie", price: 29.5,
    stock: 80, stockMin: 20, tags: ["carnet", "papeterie"], rating: 4.2 }
]);

// ---------------------------------------------------------------------
// orders
//  - 5011 : statut PENDING 
//  - les commandes sont insérées SANS total : il est calculé ensuite
// ---------------------------------------------------------------------
shop.orders.insertMany([
  { _id: 5001, customerId: 1, status: "PAID",
    items: [ { productId: 101, qty: 1, price: 8990 }, { productId: 107, qty: 1, price: 199 } ],
    createdAt: new Date("2026-01-05T10:15:00Z"), shippingCity: "Rabat" },

  { _id: 5002, customerId: 3, status: "PAID",
    items: [ { productId: 104, qty: 2, price: 1290 }, { productId: 105, qty: 2, price: 249.5 } ],
    createdAt: new Date("2026-01-12T14:40:00Z"), shippingCity: "Casablanca" },

  { _id: 5003, customerId: 2, status: "PAID",
    items: [ { productId: 108, qty: 1, price: 690 }, { productId: 109, qty: 4, price: 45 } ],
    createdAt: new Date("2026-01-20T09:05:00Z"), shippingCity: "Casablanca" },

  { _id: 5004, customerId: 5, status: "REFUNDED",
    items: [ { productId: 102, qty: 1, price: 2490 } ],
    createdAt: new Date("2026-01-28T16:20:00Z"), shippingCity: "Marrakech" },

  { _id: 5005, customerId: 1, status: "PAID",
    items: [ { productId: 103, qty: 1, price: 3200 }, { productId: 106, qty: 1, price: 390 } ],
    createdAt: new Date("2026-02-03T11:00:00Z"), shippingCity: "Rabat" },

  { _id: 5006, customerId: 4, status: "CANCELLED",
    items: [ { productId: 110, qty: 3, price: 29.5 } ],
    createdAt: new Date("2026-02-07T18:45:00Z"), shippingCity: "Fès" },

  { _id: 5007, customerId: 7, status: "PAID",
    items: [ { productId: 109, qty: 10, price: 45 }, { productId: 110, qty: 5, price: 29.5 } ],
    createdAt: new Date("2026-02-11T08:30:00Z"), shippingCity: "Agadir" },

  { _id: 5008, customerId: 8, status: "PAID",
    items: [ { productId: 106, qty: 1, price: 390 }, { productId: 107, qty: 2, price: 199 } ],
    createdAt: new Date("2026-02-15T13:10:00Z"), shippingCity: "Rabat" },

  { _id: 5009, customerId: 3, status: "PAID",
    items: [ { productId: 101, qty: 1, price: 8990 } ],
    createdAt: new Date("2026-02-19T10:55:00Z"), shippingCity: "Casablanca" },

  { _id: 5010, customerId: 9, status: "PENDING",
    items: [ { productId: 108, qty: 2, price: 690 } ],
    createdAt: new Date("2026-02-22T17:25:00Z"), shippingCity: "Oujda" },

  { _id: 5011, customerId: 6, status: "PENDING",
    items: [ { productId: 104, qty: 1, price: 1290 }, { productId: 109, qty: 2, price: 45 } ],
    createdAt: new Date("2026-02-25T12:00:00Z"), shippingCity: "Tanger" },

  { _id: 5012, customerId: 10, status: "PAID",
    items: [ { productId: 105, qty: 1, price: 249.5 }, { productId: 110, qty: 2, price: 29.5 } ],
    createdAt: new Date("2026-03-01T15:35:00Z"), shippingCity: "Fès" }
]);

// ---------------------------------------------------------------------
// Calcul du total de chaque commande : somme des qty × price
// ---------------------------------------------------------------------
shop.orders.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$_id", total: { $sum: { $multiply: ["$items.qty", "$items.price"] } } } },
  { $merge: { into: "orders", on: "_id", whenMatched: "merge", whenNotMatched: "discard" } }
]);

// ---------------------------------------------------------------------
// Total devenu faux (question 12) : on ajoute un article à la commande 5012
// SANS recalculer son total (308.5 enregistré, 353.5 en réalité)
// ---------------------------------------------------------------------
shop.orders.updateOne({ _id: 5012 }, { $push: { items: { productId: 109, qty: 1, price: 45 } } });

print("customers : " + shop.customers.countDocuments());
print("products  : " + shop.products.countDocuments());
print("orders    : " + shop.orders.countDocuments());
