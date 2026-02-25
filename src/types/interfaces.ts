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
  rating: number; 
  image: string;
  dishes: string[]; 
  isPopular?: boolean;
}

export interface IChef {
  id: string;
  name: string;
  description: string;
  image: string;
  restaurantIds: string[]; 
  isChefOfTheWeek?: boolean;
}