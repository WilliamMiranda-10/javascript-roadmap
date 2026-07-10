import { getProducts } from "../services/productService.js";

export async function listProducts(req, res) {
  try {
    const products = await getProducts();

    res.json(products);
  } catch (error) {
    console.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}
