





// const Review = require("../model/reviews");
const Order = require("../model/orders");
const Beverage = require("../model/beverages");
const Recipe = require("../model/recipes");
const Barista = require("../model/baristas");
const User = require("../model/users");
//بترجعلي اجمالي اعداد كل وحدة 


exports.getDashboardStats = async (req, res) => {
  try {
    
    const userCount = await User.countDocuments();
    const baristaCount = await Barista.countDocuments();
    const recipeCount = await Recipe.countDocuments();
    const beverageCount = await Beverage.countDocuments();
    const orderCount = await Order.countDocuments();

    res.json({
      userCount,
      baristaCount,
      recipeCount,
      beverageCount,
      orderCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard stats" });
  }
};













// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password -confirmPassword");
//     //ستخدم لتحديد الحقول التي ترغب في تضمينها أو استثنائها من النتائج. في هذه الحالة، -password و -confirmPassword يعني أن الحقول password و confirmPassword سيتم استثناؤها من نتائج الاستعلام. هذا يحسن الأمان من خلال منع إرسال معلومات حساسة (كلمات المرور) في الاستجابة.
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users" });
//   }
// };

// exports.getBaristas = async (req, res) => {
//   try {
//     const baristas = await Barista.find("username");
//     res.json(baristas);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching baristas" });
//   }
// };
// exports.getBaristas = async (req, res) => {
//     try {
//       const baristas = await Barista.find(); 
//       res.json(baristas);
//     } catch (error) {
//       console.error("Error fetching baristas:", error); 
//       res.status(500).json({ message: "Error fetching baristas" });
//     }
//   };
  

// exports.getRecipes = async (req, res) => {
//   try {
//     const recipes = await Recipe.find();
//     res.json(recipes);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching recipes" });
//   }
// };
// exports.getRecipes = async (req, res) => {
//     try {
//       const recipes = await Recipe.find()
//         .populate('baristaId', 'username') // تعبئة تفاصيل الباريستا مثل username
//         .populate('ingredientsId', 'name') // تعبئة تفاصيل المكونات
//         .populate('reviews', 'content rating') // تعبئة تفاصيل التقييمات
//         .populate('comments', 'text'); // تعبئة تفاصيل التعليقات
//       res.json(recipes);
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching recipes" });
//     }
//   };


// exports.getRecipes = async (req, res) => {
//     try {
//       const recipes = await Recipe.find()
//         .populate('baristaId', 'username') // تعبئة بيانات الباريستا
//         .populate('ingredientsId', 'name') // تعبئة بيانات المكونات إذا لزم الأمر
//         .populate('reviews', 'content rating') // تعبئة بيانات التقييمات
//         .populate('comments', 'text'); // تعبئة بيانات التعليقات
//       res.json(recipes);
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching recipes" });
//     }
//   };
// exports.getRecipes = async (req, res) => {
//     try {
//       const recipes = await Recipe.find()
//         .populate('baristaId', 'username')
//         .populate('ingredientsId', 'name')
//         .populate('reviews', 'content rating')
//         .populate('comments', 'text');
//       res.json(recipes);
//     } catch (error) {
//       console.error('Error in getRecipes:', error); // سجل الخطأ لمزيد من التفاصيل
//       res.status(500).json({ message: "Error fetching recipes" });
//     }
//   };
  
// exports.getRecipes = async (req, res) => {
//     try {
//       const recipes = await Recipe.find()
//         .populate('baristaId', 'username')
//         .populate('ingredientsId', 'name')
//         .populate('reviews', 'content rating')
//         .populate('comments', 'text');
//       res.json(recipes);
//     } catch (error) {
//       console.error('Error in getRecipes:', error); // Log error details
//       res.status(500).json({ message: "Error fetching recipes" });
//     }
//   };
  
  


// exports.getRecipes = async (req, res) => {
//   try {
//     const recipes = await Recipe.find().populate("baristaId", "email");
//     console.log(recipes);
//     res.json(recipes);
//   } catch (error) {
//     console.error('Error in getRecipes:', error);
//     res.status(500).json({ message: "Error fetching recipes" });
//   }
// };
  


// exports.getBeverages = async (req, res) => {
//   try {
//     const beverages = await Beverage.find().populate("baristaId", "username");
//     //populate يستخدم لجلب بيانات إضافية من مجموعة مرتبطة بناءً على مرجع موجود في مستند Beverage.
// في هذه الحالة، baristaId هو المرجع إلى مستند Barista، و populate يقوم بجلب معلومات الباريستا المرتبطة بكل مشروب.
// "username" يحدد أن يتم جلب فقط حقل username من مستند الباريستا المرتبط، مما يساعد في تحسين الأداء وتقليل حجم البيانات المسترجعة.

//     res.json(beverages);

//   } catch (error) {
//     res.status(500).json({ message: "Error fetching beverages" });
//   }
// };




// exports.getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("userId", "username")
//       .populate("baristaId", "username")
//       .populate("beverageId", "name");
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching orders" });
//   }
// };

// exports.getReviews = async (req, res) => {
//   try {
    // const reviews = await Review.find()
//       .populate("userId", "username")
//       .populate("targetId", "name");
//     res.json(reviews);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching reviews" });
//   }
// };

