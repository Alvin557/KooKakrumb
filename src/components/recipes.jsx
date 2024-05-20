import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://www.localhost:1337/api/recipes?populate=*', {
        headers: {
          Authorization: `Bearer b6049c64ae079a994778078e6cb4e67b7daf5648a57ae367becdb4f7a5c26fbb835efeb9f74435ceec6ae78cd37b085fd57ef6d2e5aadbbddfed1b6cfe4d1faaa9b62c3fc90e340393e6ddf6883bdd051d5bf6880d55fc95f08ab06e587d6fca276cd2cb40dfced8774b8371aa0fa7d7e7d5a8f61cf5e99bd2b6f999e3dd9875`,
        },
      });
      setRecipes(response.data.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="container mx-auto py-8">
      {!selectedRecipe ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-rose-900 text-white rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleRecipeClick(recipe)}
            >
              <img
                src={`http://localhost:1337${recipe.attributes.Reciepe_Image.data.attributes.formats.small.url}`}
                alt={recipe.attributes.Title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{recipe.attributes.Title}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <img
              src={`http://localhost:1337${selectedRecipe.attributes.Reciepe_Image.data.attributes.formats.medium.url}`}
              alt={selectedRecipe.attributes.Title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4 text-rose-900">{selectedRecipe.attributes.Title}</h2>
            <p className="text-gray-950 mb-4">
              <span className="font-semibold">Duration:</span> {selectedRecipe.attributes.Duration_to_Cook}
            </p>
            <p className="text-gray-950 mb-4">
              <span className="font-semibold">Ingredients:</span>
              <ul className="list-disc ml-4">
                {selectedRecipe.attributes.Ingredients.split('\n\n').map((ingredient, index) => (
                  <li key={index}>{ingredient.trim()}</li>
                ))}
              </ul>
            </p>
            <p className="text-gray-950 mb-4">
              <span className="font-semibold">Method:</span>
              <ul className="list-decimal ml-4">
                {selectedRecipe.attributes.Method.split('\n\n').map((step, index) => (
                  <li key={index}>{step.trim()}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;