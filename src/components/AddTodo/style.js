import styled from "styled-components";

export const AddTodoButton = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 24px;
  right: 24px;

  .add-todo-button {
    width: 64px !important;
    height: 64px !important;
    border-radius: 12px !important;
    box-shadow: 0 0 12px -1px rgba(24, 144, 255, 80) !important;

    &.disabled {
      box-shadow: none !important;
    }
  }

  .anticon.anticon-plus {
    font-size: 22px;
    margin-top: 4px;
  }
`;

export const Modal = styled.div`
  .add-todo-title {
    font-size: 30px !important;
    font-weight: 400;
    margin-top: 14px;
  }

  .modal {
    &-header {
      margin-top: 60px;
      padding: 0 36px;
    }

    &-body {
      display: flex;
      flex-direction: column;
      justify-content: flext-start;
      padding: 0 36px;
    }

    &-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  .input {
    &-group {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 40px;
    }

    &-title {
      margin-bottom: 8px !important;
    }
  }

  .add-todo-category {
    &-input {
      flex: auto;
    }

    &-container {
      display: flex;
      flex-wrap: nowrap;
      padding: 8px;
    }

    &-button {
      flex: none;
      margin-left: 10px;
      display: block;
      cursor: pointer;
    }
  }

  .divider {
    margin: 4px 0;
  }
`;
