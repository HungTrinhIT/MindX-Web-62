require('dotenv').config();

const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const { connectToDB } = require('./config/db');
const upload = require('./helpers/uploadFile');

const app = express();
const PORT = 3001;

// Connect mongodb
connectToDB();

// Middlewares
app.use(cors('*'));
app.use(express.json());
app.use(express.static(__dirname));

// Setup routes
app.use('/api/v1/', apiRouter);

app.post('/test', upload.single('images'), (req, res) => {
  console.log(req.file);
  res.json({
    message: 'test',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});


/*
  Quản lý coffee shop:
    Phân quyền user:
      1. employee: nhân viên order (A)
        + create an order => submit to system 
      2. employee: nhân viên thực hiện món (B)
        + 
      3. super admin: 
        + manage user
        + manage order
        + manage cash flow
        + manage menu

    a. Manage cash flow, manage order => number => chart
    b. Manage menu DONE
    c. Create order DONE
    d. Users management: update user profile, reset password, de-active user account
    e. Reviews 
  
  Redux (redux toolkit)
  Backend tips
  Deployment 

  Lập nhóm

  2 tháng
  4 devs

  A. Phân tích dự án

    1. Authentication, authorization  => user collection

    2. Create order  => order collection
      + A chọn món, chọn số lượng => tạo order ??????????
      + B nhận được cái gì => ..... => Hoàn thành order 

    3. Manage menu: 
      + product collection
      + category

    4. Manage cash flow, manage order => number => chart
      + 

    5. Reviews
      + review collection

    6. Users management: update user profile, reset password, de-active user account
      + 
    
  B. Phân tích kỹ hơn về từng chức năng => vẽ user flow 

  C. Hãy chọn công nghệ: MERN stack mongo express react(nextjs) node

  D.Thiết kế kiến trúc hệ thống
    + Frontend: 
    + Backend: 
    + Schema 

  E. Đưa lên những quy tắc:
    + Thời gian họp nhóm
    + Tool:
      + Vẽ flow: draw io,  fig jam
      + Version control: github
      + Quản lý task: Trello
      + Coding convention 
    + Quy trình phát triển phát triển phần mềm: scrum agile => 1 tuần (sprint) => assign 


  F. Build project structure
    + coding, test

  
*/
