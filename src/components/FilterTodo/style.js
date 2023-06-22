import styled from "styled-components";

export const FilterTodoButton = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-bottom: 20px !important;
`;

export const Modal = styled.div`
  .filter-todo-title {
    font-size: 30px !important;
    font-weight: 400;
    margin-top: 14px;
  }

  .modal {
    &-header {
      margin-top: 40px;
      padding: 0 36px;
    }

    &-body {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 36px;
    }
  }
`;
