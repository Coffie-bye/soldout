import { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("price", formData.price);
      formPayload.append("description", formData.description);
      if (formData.image) formPayload.append("image", formData.image);

      const response = await axios.post("/api/products", formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product created successfully!");
      // Reset form or redirect
    } catch (err) {
      setError(err.response?.data?.message || "Upload failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Product name"
        required
      />
      <input
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="Price"
        required
      />
      <input
        type="file"
        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
        accept="image/jpeg, image/png, image/webp"
      />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Uploading..." : "Create Product"}
      </button>
    </form>
  );
};
