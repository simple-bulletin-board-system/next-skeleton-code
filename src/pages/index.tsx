import { useEffect, useState } from "react";

import { message } from "antd";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { RootState } from "@/config/reducer";
import LoadingStatus from "@/constants/loading/status";
import { useDispatch, useSelector } from "@/hooks/redux";
import { actions as categoryActions, ICategoryState } from "@/slices/category";

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
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { categories, loading: categoryLoading } = useSelector<ICategoryState>(
    (state: RootState) => state.category
  );
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

  const onAddModalClose = (): void => {
    setAddModalOpen(false);
  };

  const onAddModalOpen = (): void => {
    setAddModalOpen(true);
  };

  useEffect(() => {
    dispatch(categoryActions.findAll());
  }, []);

  useEffect(() => {
    if (categoryLoading === LoadingStatus.FAIL) {
      messageApi.open({
        type: "error",
        content: "🙏 Sorry, Failed to get category list.",
      });
    }
  }, [categoryLoading]);

  return (
    <Container>
      {contextHolder}
      <TodoList todos={[]} categories={categories} />
      <AddTodo
        categories={categories}
        open={addModalOpen}
        onClose={onAddModalClose}
        onOpen={onAddModalOpen}
      />
    </Container>
  );
}
