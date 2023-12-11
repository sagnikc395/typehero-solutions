type GroceryStore<Place1, Place2> = {
  name: Place1;
  city: Place2;
};

type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type CapreseSalad = GroceryItem<"Caprese Salad", 14.99, true>;
