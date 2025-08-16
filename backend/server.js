import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { errorMiddleware } from "./middlewares/errorHandler.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("SoldOut Backend is running");
});

// Error handler (MUST be after all routes)
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
