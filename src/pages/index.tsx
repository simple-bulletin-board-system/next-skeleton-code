import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

import styled from "styled-components";

const Container = styled.div`
  padding: 0 36px;

  .ant {
    &-input {
      border-radius: 4px !important;
    }

    &-select-selector {
      border-radius: 4px !important;
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <TodoList todos={[]} categories={[]} />
      <AddTodo categories={[]} />
    </Container>
  );
}
