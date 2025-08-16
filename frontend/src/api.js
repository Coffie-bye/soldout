// Example: Fetch products from backend
const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/products");
    console.log(response.data); // Should log your backend response
  } catch (error) {
    console.error("Backend connection failed:", error);
  }
};
