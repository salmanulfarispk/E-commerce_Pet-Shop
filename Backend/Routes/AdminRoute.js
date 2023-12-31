const express=require("express")
const router=express.Router();   
const admincontroller=require("../controllers/AdminController")


//middlewares
const Trycatchmiddleware=require("../middlewares/TryCatchmiddleware")
const verifytoken=require("../middlewares/AdiminAuthentication")
const imageuploading=require("../middlewares/imageUploader/imageuploader")



router
  
.post("/login",Trycatchmiddleware(admincontroller.login))

    
.use(verifytoken)  

.get("/Allusers",Trycatchmiddleware(admincontroller.viewallusers))
.get("/Allusers/:id",Trycatchmiddleware(admincontroller.viewById)) 
.post("/products",imageuploading,Trycatchmiddleware(admincontroller.addproducts))
.get("/products",Trycatchmiddleware(admincontroller.viewAllproducts))
.delete("/product/:id",Trycatchmiddleware(admincontroller.deleteproduct))
.patch("/product",Trycatchmiddleware(admincontroller.editproducts))
.get("/orders",Trycatchmiddleware(admincontroller.viewOrderDetails))
.get("/RevenueStatus",Trycatchmiddleware(admincontroller.status))  
.get("/product/:id",Trycatchmiddleware(admincontroller.productByid))
 .get("/products/category/:categoryname",Trycatchmiddleware(admincontroller.productByCategory))
  
module.exports=router  