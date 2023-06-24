import axios from "axios";

const CATEGORY_API_URL = "/api/categories";

export const findAll = async () => await axios.get(CATEGORY_API_URL);
