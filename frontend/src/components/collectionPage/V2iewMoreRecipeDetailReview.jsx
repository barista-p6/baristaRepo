import React from "react";

const V2iewMoreRecipeDetailReview = ({ recipe }) => {
  if (!recipe) return null;

  const containerStyle = {
    display: 'flex',
    width: '100%',
    height: '100vh', // Ensures the container takes full viewport height
    backgroundColor: '#f9f9f9',
    position: 'relative', // Allows absolute positioning of child elements
    fontFamily: "'Roboto', sans-serif", // نوع خط احترافي
  };

  const contentStyle = {
    width: '67%',
    padding: '40px', // زيادة المسافة بين العناصر لتحريكها لأسفل
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  };

  const recipeImgStyle = {
    width: '75%',
    maxWidth: '400px',
    height: '80%',
    position: 'absolute',
    top: '15%', // Adjusted positioning for more modern look
    left: '100%',
    transform: 'translate(-50%, 0)', 
    zIndex: 2,
  };

  const bgContainerStyle = {
    width: '33%',
    position: 'relative',
  };

  const bgImgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: 0,
  };

  const nameStyle = {
    fontSize: '32px', // تكبير حجم الخط لجعل الاسم أكثر بروزًا
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase', // لتحويل النص إلى أحرف كبيرة
    letterSpacing: '2px', // إضافة مسافة بين الأحرف لمظهر عصري
    fontFamily: "'Montserrat', sans-serif", // نوع خط احترافي
  };

  const textStyle = {
    fontSize: '18px', // تكبير النص ليكون أكثر وضوحًا
    margin: '20px 0',
    color: '#666',
    textAlign: 'center',
    lineHeight: '1.6', // تحسين تباعد الأسطر
  };

  const ingredientsInstructionsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // جعلها شبكة عمودية لمظهر عصري
    gap: '40px', // إضافة مسافة بين الأعمدة
    width: '100%',
    margin: '30px 0',
  };

  const ingredientsStyle = {
    listStyle: 'none',
    padding: '0',
    textAlign: 'left',
  };

  const ingredientItemStyle = {
    fontSize: '16px',
    color: '#333',
    fontFamily: "'Roboto', sans-serif", // الخط المحترف
    lineHeight: '1.8',
  };

  const instructionsStyle = {
    textAlign: 'left',
    fontSize: '16px',
    color: '#333',
    fontFamily: "'Roboto', sans-serif", // الخط المحترف
    lineHeight: '1.8',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h3 style={nameStyle}>{recipe.name}</h3>
        {/* تقسيم المكونات والتعليمات بطريقة أكثر حداثة */}
        <div style={ingredientsInstructionsStyle}>
          <div>
            <strong style={{ fontSize: '20px', color: '#222', fontWeight: 'bold' }}>Ingredients:</strong>
            <ul style={ingredientsStyle}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} style={ingredientItemStyle}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong style={{ fontSize: '20px', color: '#222', fontWeight: 'bold' }}>Instructions:</strong>
            <p style={instructionsStyle}>{recipe.ingredients}</p>
          </div>
        </div>
        <p style={textStyle}>
          <strong>Categories:</strong> {recipe.categories.join(", ")}
        </p>
        <p style={textStyle}>
          <strong>Dietary Restrictions:</strong> {recipe.dietaryRestrictions.join(", ")}
        </p>
        <img src={recipe.photos} alt="Recipe" style={recipeImgStyle} />
      </div>
      <div style={bgContainerStyle}>
        <img src={recipe.bg} alt="Background" style={bgImgStyle} />
      </div>
    </div>
  );
};

export default V2iewMoreRecipeDetailReview;