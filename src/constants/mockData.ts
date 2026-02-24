
import type { IChef, IDish, IRestaurant } from "../types/interfaces";

export const mockDishes: IDish[] = [
  {
    id: "d1",
    name: "Pad Ki Mao",
    ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    price: 88,
    image: "/assets/dishes/padkimao.svg",
    icon: "spicy",
  },
  {
    id: "d2",
    name: "Garbanzo Frito",
    ingredients: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    price: 98,
    image: "/assets/dishes/garbazano.svg",
    icon: "spicy",
  },
  {
    id: "d3",
    name: "Smoked Pizza",
    ingredients: "Basil dough, cashew butter, demi-glace, bison& radish",
    price: 65,
    image: "/assets/dishes/smokedpizza.svg",
    icon: "vegan",
  },
];

export const mockRestaurants: IRestaurant[] = [
  {
    id: "r1",
    name: "Claro",
    chef: "Ran Shmueli",
    rating: 4,
    image: "/assets/restaurants/claro.svg",
    dishes: ["d1"],
    isPopular: true,
  },
  {
    id: "r2",
    name: "Lumina",
    chef: "Meir Adoni",
    rating: 3,
    image: "/assets/restaurants/Lumina.svg",
    dishes: ["d2"],
    isPopular: true,
  },
  {
    id: "r3",
    name: "Tiger Lilly",
    chef: "Yanir Green",
    rating: 4,
    image: "/assets/restaurants/tiger-lily.svg",
    dishes: ["d3"],
    isPopular: true,
  },
  {
    id: "r4",
    name: "Onza",
    chef: "Yossi Shitrit",
    rating: 4,
    image: "/assets/restaurants/onza.svg",
    dishes: ["d3"],
    isPopular: true,
  },
  {
    id: "r5",
    name: "Kitchen Market",
    chef: "Yossi Shitrit",
    rating: 4,
    image: "/assets/restaurants/kitchen-market.svg",
    dishes: ["d3"],
    isPopular: true,
  },
  {
    id: "r6",
    name: "Mashya",
    chef: "Yossi Shitrit",
    rating: 4,
    image: "/assets/restaurants/mashya.svg",
    dishes: ["d3"],
    isPopular: true,
  },
];

export const mockChefs: IChef[] = [
  {
    id: "c1",
    name: "Yossi Shitrit",
    description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    image: "/assets/chefs/yossishitrit.svg",
    restaurantIds: ["r4", "r5", "r6"],
    isChefOfTheWeek: true,
  }
];