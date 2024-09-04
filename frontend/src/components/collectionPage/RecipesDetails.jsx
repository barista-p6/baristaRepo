import React, { useContext ,useEffect , useState } from "react";
import { RecipesContext } from "../useContext/RecipesContext";
import { Link } from "react-router-dom";
import ViewMoreRecipeDetail from "./ViewMoreRecipeDetail";
import { RecipesProvider } from "../useContext/RecipesContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipesDetails = () => {
  const { recipes, loading, error } = useContext(RecipesContext);
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
 




  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the product details!", error);
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
    <Link to={`/recipes/${id}`}> 

      <RecipesProvider productId={id}>
                <ViewMoreRecipeDetail />
      </RecipesProvider>
           </Link>
    </div>
  );
};

export default RecipesDetails;
