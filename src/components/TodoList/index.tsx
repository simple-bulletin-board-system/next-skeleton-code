import { Result, Skeleton, Typography } from "antd";
import FilterTodo from "@/components/FilterTodo";

import { ITodo } from "@/models/todo.model";
import { ICategory } from "@/models/category.model";

import Container from "./style";

interface IContent {
  hasError?: boolean;
  loading?: boolean;
}

export interface ITodoListCategory extends ICategory {
  id: number;
}

interface ITodoList {
  categories: ITodoListCategory[];
  hasError?: boolean;
  loading?: boolean;
  todos: ITodo[];
}

export default function TodoList({
  categories,
  hasError = false,
  loading = false,
  todos,
}: ITodoList) {
  const Content = ({ hasError, loading }: IContent) => {
    if (hasError) {
      return <Result status="500" subTitle="Sorry, something went wrong." />;
    }

    if (loading) {
      return (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      );
    }

    if (todos.length <= 0) {
      return <Result status="404" subTitle="Todos you add will appear here!" />;
    }

    // TODO LIST PUBLISH
    return <></>;
  };

  return (
    <Container>
      <Typography.Title className="todos-title">Todos</Typography.Title>
      <FilterTodo categories={categories} />
      <Content hasError={hasError} loading={loading} />
    </Container>
  );
}
