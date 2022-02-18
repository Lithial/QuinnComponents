import "./styles/index.scss";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
}
const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leatherStrips: 1,
    refinedMoonstone: 4,
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletRecipe);
