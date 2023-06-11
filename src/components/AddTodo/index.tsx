import { useState } from "react";

import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Slider,
  Typography,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

import capitalize from "lodash/capitalize";
import { EPriority } from "@/models/todo.model";
import { ICategory } from "@/models/category.model";

import * as Container from "./style";

interface IAddTodoCategory extends ICategory {
  id: number;
}

interface IAddTodo {
  disabled?: boolean;
  categories: IAddTodoCategory[];
}

export default function AddTodo({ disabled = false, categories }: IAddTodo) {
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  const modalToggle = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Modal open={open} okText="Save" onCancel={modalToggle} width={1000}>
        <Container.Modal id="add-todo-modal-container">
          <div>
            <div className="modal-header">
              <Typography.Title className="add-todo-title">
                Add Todo
              </Typography.Title>
            </div>
            <div className="modal-body">
              <Form
                autoComplete="off"
                colon={false}
                form={form}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Form.Item label="To-do" id="content">
                  <Input placeholder="What needs to be done?" />
                </Form.Item>
                <Form.Item label="Categories" id="categoryIds">
                  <Select
                    allowClear
                    dropdownRender={(menu: JSX.Element): JSX.Element => (
                      <div>
                        {menu}
                        <Divider className="divider" />
                        <div className="add-todo-category-container">
                          <Input className="add-todo-category-input" />
                          <Button
                            className="add-todo-category-button"
                            icon={<PlusOutlined />}
                          >
                            Add Category
                          </Button>
                        </div>
                      </div>
                    )}
                    getPopupContainer={() =>
                      document.getElementById("add-todo-modal-container") ??
                      document.body
                    }
                    mode="multiple"
                    options={categories.map((category) => ({
                      label: category.content,
                      value: category.id,
                    }))}
                    placeholder="Choose Categories"
                  />
                </Form.Item>
                <Form.Item label="Priority" id="priority">
                  <Slider
                    marks={{
                      0: "None",
                      1: capitalize(EPriority.LOW),
                      2: capitalize(EPriority.MEDIUM),
                      3: capitalize(EPriority.HIGH),
                    }}
                    max={3}
                    tooltip={{ open: false }}
                  />
                </Form.Item>
              </Form>
            </div>
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
