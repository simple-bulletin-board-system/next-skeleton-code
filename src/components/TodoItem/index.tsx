import { Checkbox, Tag, Typography } from "antd";
import CloseOutlined from "@/icons/CloseOutlined";

import { EPriority, ITodo } from "@/models/todo.model";
import { ICategory } from "@/models/category.model";

import Container from "./style";

interface ITodoItemCategory extends ICategory {
  id: number;
}

interface ITodoItemTodo extends ITodo {
  id: number;
  categories?: ITodoItemCategory[];
}

interface ITodoItem {
  loading?: boolean;
  todo: ITodoItemTodo;
}

const PriorityColors = new Map<EPriority, string>([
  [EPriority.LOW, "blue"],
  [EPriority.MEDIUM, "purple"],
  [EPriority.HIGH, "red"],
]);

export default function TodoItem({ loading = false, todo }: ITodoItem) {
  return (
    <Container completed={todo.completed}>
      <div className="title-row">
        <CloseOutlined className="remove-button" />
        <Typography.Text delete={todo.completed} className="title-text">
          {todo.content}
        </Typography.Text>
        <div className="checkbox">
          <Checkbox disabled={loading} checked={todo.completed} />
        </div>
      </div>
      {todo.categories && (
        <div className="categories-row">
          {todo.categories.map((category, index) => (
            <Typography.Text
              key={category.id}
              disabled={todo.completed}
              className="category-text"
            >
              {index + 1 === todo?.categories?.length
                ? category.content
                : `${category.content}, `}
            </Typography.Text>
          ))}
        </div>
      )}
      {todo.priority && (
        <div className="priority-row">
          <Tag color={PriorityColors.get(todo.priority)}>{todo.priority}</Tag>
        </div>
      )}
    </Container>
  );
}
