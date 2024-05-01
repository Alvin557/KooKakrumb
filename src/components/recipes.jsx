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
          Authorization: `Bearer ad6ace83831cafcaba86a9d98d3e9fb038098bb093c5bfb6ad313391de1f2d139d2b59a2c933d8a0ddd66aaa3ddbcc7a468b53ceba2274f8a43f8848d03341dfa20c03d494c7e29ef510eb23fd87866fbba78c343c8cab2148798b442b14e3189ac2609ea943d56a114390b02915c2e254bfe9392d4f25d34002b8483217ee24`,
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