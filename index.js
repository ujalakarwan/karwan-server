const express = require("express");
const cors = require("cors");

const userRouter = require("./src/routes/users.routes");
const videoRouter = require("./src/routes/videos.routes");
const bookRequestRouter = require("./src/routes/bookRequests.routes");
const supplicationRouter = require("./src/routes/supplications.routes");
const bookRouter = require("./src/routes/books.routes");
const groupRouter = require("./src/routes/groups.routes");
const visasRouter = require("./src/routes/visas.routes");
const ProductRouter = require("./src/routes/products.routes");
const ProductCartRouter = require("./src/routes/productCarts.routes");
const BannerRouter = require("./src/routes/banners.routes");

require("./db/connect");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: "1000000kb" }));

app.use(userRouter);
app.use(videoRouter);
app.use(bookRouter);
app.use(supplicationRouter);
app.use(bookRequestRouter);
app.use(groupRouter);
app.use(visasRouter);
app.use(ProductRouter);
app.use(ProductCartRouter);
app.use(BannerRouter);

app.get("/", (req, res) => res.send("Hello Server!"));
app.listen(port, () => console.log(`Server is listening on port ${port}`));
