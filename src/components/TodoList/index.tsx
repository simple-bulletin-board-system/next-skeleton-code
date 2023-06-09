import { Result, Skeleton, Typography } from "antd";

import { ITodo } from "@/models/todo.model";

import Container from "./style";

interface ITodoList {
  hasError?: boolean;
  loading?: boolean;
  todos: ITodo[];
}

interface IContent {
  hasError?: boolean;
  loading?: boolean;
}

export default function TodoList({
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
      <Content hasError={hasError} loading={loading} />
    </Container>
  );
}
