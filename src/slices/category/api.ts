import axios from "axios";
import { ICategory } from "@/models/category.model";

const CATEGORY_API_URL = "/api/categories";

export const save = async (category: ICategory) =>
  await axios.post(CATEGORY_API_URL, category);

export const findAll = async () => await axios.get(CATEGORY_API_URL);
