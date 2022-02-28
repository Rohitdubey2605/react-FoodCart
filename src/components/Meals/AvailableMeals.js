import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Butter Masala",
    description: " Paneer Butter Masala",
    price: 190,
  },
  {
    id: "m2",
    name: "Dal Makhani",
    description: "Dal Makhani",
    price: 190,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 299,
  },
  {
    id: "m4",
    name: "Veg Chowmein",
    description: "Veg Chowmein",
    price: 180,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id = {meal.id}
        description={meal.description}
        price={meal.price}
        name={meal.name}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
