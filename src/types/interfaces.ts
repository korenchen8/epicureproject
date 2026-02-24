export interface IDish {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  icon?: 'spicy' | 'vegetarian' | 'vegan';
}

export interface IRestaurant {
  id: string;
  name: string;
  chef: string;
  rating: number; // 1-5
  image: string;
  dishes: string[]; // IDs of dishes belonging to this restaurant
  isPopular?: boolean;
}

export interface IChef {
  id: string;
  name: string;
  description: string;
  image: string;
  restaurantIds: string[]; // IDs of restaurants owned by this chef
  isChefOfTheWeek?: boolean;
}