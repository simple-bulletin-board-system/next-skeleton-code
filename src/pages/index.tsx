import { useEffect, useState } from "react";

import { message } from "antd";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { RootState } from "@/config/reducer";
import LoadingStatus from "@/constants/loading/status";
import { useDispatch, useSelector } from "@/hooks/redux";
import { ICategory } from "@/models/category.model";
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
  const {
    categories,
    postLoading: categoryPostLoading,
    getLoading: categoryGetLoading,
  } = useSelector<ICategoryState>((state: RootState) => state.category);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

  const addCategory = (category: ICategory) => {
    dispatch(categoryActions.save(category));
  };

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
    if (categoryGetLoading === LoadingStatus.FAIL) {
      messageApi.open({
        type: "error",
        content: "🙏 Sorry, Failed to get category list.",
      });
    }
  }, [categoryGetLoading]);

  return (
    <Container>
      {contextHolder}
      <TodoList
        todos={[]}
        categories={categories}
        categoryGetLoading={categoryGetLoading === LoadingStatus.PENDING}
      />
      <AddTodo
        addCategory={addCategory}
        categories={categories}
        categoryPostLoading={categoryPostLoading}
        categoryGetLoading={categoryGetLoading === LoadingStatus.PENDING}
        open={addModalOpen}
        onClose={onAddModalClose}
        onOpen={onAddModalOpen}
      />
    </Container>
  );
}
