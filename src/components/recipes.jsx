import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (id) {
      const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
      setSelectedRecipe(recipe);
    } else {
      setSelectedRecipe(null);
    }
  }, [id, recipes]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/recipes?populate=*', {
        headers: {
          Authorization: `Bearer 38e5aaa1c61205f23b25f48bb1a29f803a902858a035975ae583528f4df39d96ad1f6f80a32ca923987b9272076c800db87e89357aa191a09f12bba633454be2068af3502d40162fea8ecbe34fbe4c0322ffb40f03fdbdc5ced8f776d1aee05866758112325fb9241c276b8126d93a07eb9a1685f732f84c3156721236877c5b`,
        },
      });
      setRecipes(response.data.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleRecipeClick = (recipe) => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div className="container mx-auto py-8">
      {!id ? (
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
        selectedRecipe && (
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
        )
      )}
    </div>
  );
};

export default Recipes;
