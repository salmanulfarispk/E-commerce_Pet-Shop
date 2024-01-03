const express=require("express")
const router=express.Router()

const Trycatchmiddleware=require("../middlewares/TryCatchmiddleware")
const usercontroler=require("../controllers/userController")

const verifyToken=require("../middlewares/userAuthentication")



router

.post('/register',Trycatchmiddleware(usercontroler.userRegister))
.post('/login',Trycatchmiddleware(usercontroler.userlogin)) 

.get('/products',Trycatchmiddleware(usercontroler.viewAllProduct))
.get("/products/:id",Trycatchmiddleware(usercontroler.viewproductById))
.get("/products/category/:categoryname",Trycatchmiddleware(usercontroler.productByCategory))
    
.use(verifyToken)

.post("/:id/cart",Trycatchmiddleware(usercontroler. addToCart))
.get("/:id/cart",Trycatchmiddleware(usercontroler.viewcart))
.put("/:id/cart",Trycatchmiddleware(usercontroler.cartItemQuantity))
.delete("/:id/cart/:proid",Trycatchmiddleware(usercontroler.dltCartProdct))
.post("/:id/wishlist",Trycatchmiddleware(usercontroler.addTowishlist))
.get("/:id/wishlist",Trycatchmiddleware(usercontroler.viewWishlist))
.delete("/:id/wishlist",Trycatchmiddleware(usercontroler.dletwishlist))
.post("/:id/payment",Trycatchmiddleware(usercontroler.payment))
.get("/payment/success",Trycatchmiddleware(usercontroler.success))
.post("/payment/cancel",Trycatchmiddleware(usercontroler.Cancel))
.get("/:id/orders",Trycatchmiddleware(usercontroler.orderDetails))

 
module.exports= router              

     
 
            