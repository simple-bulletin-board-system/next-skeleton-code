import type { NextApiRequest, NextApiResponse } from "next";

import * as httpMethod from "@/constants/http/method";
import * as httpStatus from "@/constants/http/status";
import { ITodo } from "@/models/todo.model";

let sequence = 1;
export const database = new Array<ITodo[]>();

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<ITodo[] | ITodo>
) {
  const { method, body } = request;

  switch (method) {
    default:
      break;
  }
}
