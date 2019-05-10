import { outputOf, getElements, removeElements } from './helpers';

function equalsMateria(m1, m2) {
  return m1.type === m2.type && m1.state === m2.state;
}

function equalsIngredient(i1, i2) {
  return equalsMateria(i1.material, i2.material) && i1.amount >= i2.amount;
}

function includeAll({ ingredients, recipe }) {
  return recipe.ingredients.reduce(
    (res, ingredient) => res && ingredients.find(i => equalsIngredient(i, ingredient)),
    true,
  );
}

function removeUsedMaterials({ ingredients, recipe }) {
  return recipe.ingredients.reduce((res, ingredient) => {
    const foundIngredient = res.find(i => equalsMateria(ingredient.material, i.material));
    if (foundIngredient) {
      return res.map((i) => {
        if (equalsMateria(ingredient.material, i.material)) {
          return { ...i, amount: i.amount - ingredient.amount };
        }
        return i;
      });
    }
    return res;
  }, ingredients);
}

function transformMaterials({ ingredients }, newMaterials) {
  return newMaterials.reduce((res, material) => {
    const foundIngredient = res.find(ingredient => equalsMateria(ingredient.material, material));
    if (foundIngredient) {
      return res.map((ingredient) => {
        if (equalsMateria(ingredient.material, material)) {
          return { ...ingredient, amount: ingredient.amount + 1 };
        }
        return ingredient;
      });
    }
    return [...res, { material, amount: 1 }];
  }, ingredients);
}

export default (machineCrafter, floor) => {
  let newFloor = [...floor];
  let newMachineCrafter = { ...machineCrafter };
  let isCrafting = false;

  if (machineCrafter.isCrafting) {
    isCrafting = false;
    newFloor = [
      ...floor,
      {
        position: outputOf(newMachineCrafter),
        elements: [{ ...newMachineCrafter.recipe.newMaterial }],
      },
    ];
  } else if (includeAll(newMachineCrafter)) {
    isCrafting = true;
    newMachineCrafter = {
      ...machineCrafter,
      ingredients: removeUsedMaterials(newMachineCrafter),
    };
  }

  newMachineCrafter = {
    ...newMachineCrafter,
    ingredients: transformMaterials(
      newMachineCrafter,
      getElements(newMachineCrafter.position, floor),
    ),
    isCrafting,
  };
  return {
    machine: newMachineCrafter,
    floor: removeElements(newMachineCrafter.position, newFloor),
  };
};
