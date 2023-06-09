import { useState } from "react";

import { Button, Modal, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import * as Container from "./style";

interface IAddTodo {
  disabled?: boolean;
}

export default function AddTodo({ disabled = false }: IAddTodo) {
  const [open, setOpen] = useState<boolean>(false);

  const modalToggle = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Modal open={open} onCancel={modalToggle}>
        <Container.Modal>
          <div>
            <div className="modal-header">
              <Typography.Title className="add-todo-title">
                Add Todo
              </Typography.Title>
            </div>
            <div className="modal-body"></div>
          </div>
        </Container.Modal>
      </Modal>
      <Container.AddTodoButton>
        <Button
          className={`add-todo-button${disabled ? " disabled" : ""}`}
          disabled={disabled}
          icon={<PlusOutlined />}
          onClick={modalToggle}
          type="primary"
        />
      </Container.AddTodoButton>
    </>
  );
}
