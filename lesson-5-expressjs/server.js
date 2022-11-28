const express = require("express");
const contactRouter = require("./routes/contacts");
const userRouter = require("./routes/users");

const checkAdminMiddleware = require("./middlewares/checkAdmin");

const app = express();
const PORT = 3001;

// Middlewares
app.use(express.json());

app.use("/contacts", contactRouter);
app.use("/users", userRouter);

app.get("/admin", checkAdminMiddleware, (req, res) => {
  res.send("Welcome to admin page");
});

const middleWareVongSoLoai = (req, res, next) => {
  if (true) {
    console.log("Qua được vòng sơ loại rồi,.... Go Go");
    next();
  }
};

const middleWareVongBang = (req, res, next) => {
  if (true) {
    console.log("Qua được vòng bảng rồi,.... Go Go");
    next();
    // res.json({
    //   msg: "Bị loại ở vòng bảng rồi",
    // });
  }
};
const middleWareVong1_16 = (req, res, next) => {
  if (true) {
    console.log("Qua được vòng 1/16 rồi,.... Go Go");
    next();
  }
};

app.get(
  "/lay-cup-ve-brasil",
  middleWareVongSoLoai,
  middleWareVongBang,
  middleWareVong1_16,
  (req, res) => {
    res.json({
      msg: "Winnnn, mang cúp về nước đê",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});

// RESTful => Client <-> Server HTTP
// HTTP method: GET, PUT, POST, PATCH, HEAD, DELETE, ...
/*
    How to define API endpoint correctly: CRUD: Create - Read - Update - Delete

    1. GET list all contacts:   GET:    http://localhost:3001/contacts (Read)

    2. GET a contact:           GET:    http://localhost:3001/contacts/:id (Read)

    3. ADD new contact:         POST:   http://localhost:3001/contacts (Create)

    4. UPDATE  a contact:       PUT/PATCH   http://localhost:3001/contacts/:id (Update)

    5. DELETE a contact:        DELETE: http://localhost:3001/contacts/:id (Delete)

    * params: http://localhost:3001/contacts/:id
        + contacts is a param
        + id: is a dynamic param

    * query:  http://localhost:3001/contacts?page=2&per_page=30
        + page: 2
        + per_page: 30

    * body: POST, PUT, PATCH

      /users 5 APIs
      /category 5 APIs
      /product 5 APIs
      /promotion 5 APIs
      /shop 5 APIs
      /orders  5 APIs
      /wishlist 5 APIs

      /worldcup => 404 Not Found

    7 * 5 = 35 APIs * 20  = 700 code lines

    Brasil 2022 Quatar 
      => Vòng sơ loại
      => Vòng bảng
      => Vòng 1/16
      => Vòng tứ kết
      => Vòng bán kết
      => Trận chung kêt
      => Cup

    Brasil => /lay-cup-ve-nuoc 
*/
