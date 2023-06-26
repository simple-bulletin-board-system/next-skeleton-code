import type { NextApiRequest, NextApiResponse } from "next";

import * as httpMethod from "@/constants/http/method";
import * as httpStatus from "@/constants/http/status";
import { ICategory } from "@/models/category.model";

interface IGetResponseCategory extends ICategory {
  id: number;
}

let sequence = 4;
export const database = new Array<IGetResponseCategory>(
  { id: 1, content: "💪 Exercise" },
  { id: 2, content: "📚 Study" },
  { id: 3, content: "👩‍💻 Working" }
);

function saveCategory(category: ICategory) {
  const target = { id: sequence, ...category };
  database.push(target);
  sequence += 1;
  return target;
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<IGetResponseCategory[] | ICategory>
) {
  const { method, body } = request;

  switch (method) {
    case httpMethod.POST:
      response.status(httpStatus.CREATED).json(saveCategory(body));
      break;
    case httpMethod.GET:
      response.status(httpStatus.OK).json(database);
      break;
    default:
      break;
  }
}
