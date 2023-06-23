import type { NextApiRequest, NextApiResponse } from "next";

import * as httpMethod from "@/constants/http/method";
import * as httpStatus from "@/constants/http/status";
import { ICategory } from "@/models/category.model";

let sequence = 1;
export const database: ICategory[] = new Array();

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<ICategory[] | ICategory>
) {
  const { method, body } = request;

  switch (method) {
    default:
      break;
  }
}
