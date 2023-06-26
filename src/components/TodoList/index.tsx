import { useState, useMemo } from "react";

import { Divider, List, Result, Skeleton, Typography } from "antd";
import FilterTodo from "@/components/FilterTodo";

import { ITodo, EPriority } from "@/models/todo.model";
import { ICategory } from "@/models/category.model";

import Container from "./style";
import TodoItem from "../TodoItem";

interface IContent {
  hasError?: boolean;
  loading?: boolean;
}

interface ITodoListCategory extends ICategory {
  id: number;
}

interface ITodoListTodo extends ITodo {
  id: number;
  categories?: ITodoListCategory[];
}

interface ITodoList {
  categories: ITodoListCategory[];
  categoryGetLoading?: boolean;
  hasError?: boolean;
  loading?: boolean;
  todos: ITodoListTodo[];
}

export default function TodoList({
  categories,
  categoryGetLoading = false,
  hasError = false,
  loading = false,
  todos,
}: ITodoList) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedPriorities, setSelectedPeriorities] = useState<
    (EPriority | "none")[]
  >([]);

  const filteredTodos: ITodoListTodo[] = useMemo(() => {
    if (!(selectedCategories.length > 0 || selectedPriorities.length > 0)) {
      return todos;
    }

    const result: ITodoListTodo[] = [];

    for (const todo of todos) {
      // 1. filter by category
      if (selectedCategories.length > 0 && todo.categories) {
        const { categories } = todo;
        const contains =
          categories
            .map((category) => category.id)
            .filter((id) => selectedCategories.includes(id)).length > 0;
        if (contains) {
          result.push(todo);
          continue;
        }
      }

      // filter by priorities
      if (selectedPriorities.length > 0) {
        const contains = selectedPriorities.includes(todo.priority ?? "none");
        if (contains) {
          result.push(todo);
        }
      }

      return result;
    }

    return result;
  }, [todos, selectedCategories, selectedPriorities]);

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

    return (
      <>
        <List
          className="todos-list"
          dataSource={filteredTodos.filter((todo) => !todo.completed)}
          locale={{ emptyText: "All todos done." }}
          renderItem={(todo: ITodoListTodo): JSX.Element => (
            <TodoItem todo={todo} />
          )}
        />
        {todos.filter((todo) => !!todo.completed).length > 0 && (
          <>
            <Divider className="divider" />
            <List
              className="todos-list"
              dataSource={filteredTodos.filter((todo) => !!todo.completed)}
              renderItem={(todo: ITodoListTodo): JSX.Element => (
                <TodoItem todo={todo} />
              )}
            />
          </>
        )}
      </>
    );
  };

  return (
    <Container>
      <Typography.Title className="todos-title">Todos</Typography.Title>
      <FilterTodo
        categories={categories}
        categoryGetLoading={categoryGetLoading}
      />
      <Content hasError={hasError} loading={loading} />
    </Container>
  );
}
