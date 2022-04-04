import { FC } from "react";
import { Props } from "./Types";

const DisplayRecipe: FC<Props> = ({ foodRecipe }) => {
  return (
    <>
      {foodRecipe.map((value) => (
        <>
          <br></br>
          <img
            src={value.recipe.image}
            width="250px"
            height="200px"
            alt="food"
          />
          <p>{value.recipe.label}</p>
          <p>
            Diet {value.recipe.dietLabels && value.recipe.dietLabels.map((value:string)=>(<li> {value} </li>))}
          </p>
          <p>Ingredients</p>
          <em>{value.recipe.ingredientLines}</em>

          <p>Nutrition</p>
          {value.recipe.healthLabels.map((value: string)=> <li> {value}</li>)}
        </>
      ))}
    </>
  );
};

export default DisplayRecipe;
