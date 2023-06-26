import { useState } from "react";

import { Button, Form, Modal, Select, Typography } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import capitalize from "lodash/capitalize";
import { EPriority } from "@/models/todo.model";
import { ICategory } from "@/models/category.model";

import * as Container from "./style";

interface IFilterTodoCategory extends ICategory {
  id: number;
}

interface IFilterTodo {
  categories: IFilterTodoCategory[];
  categoryGetLoading: boolean;
}

export default function FilterTodo({
  categories,
  categoryGetLoading,
}: IFilterTodo) {
  const [open, setOepn] = useState<boolean>(false);
  const [form] = Form.useForm();

  const modalToggle = (): void => {
    setOepn((prev) => !prev);
  };

  return (
    <>
      <Modal destroyOnClose okText="Save" onCancel={modalToggle} open={open}>
        <Container.Modal id="filter-todo-modal-container">
          <div>
            <div className="modal-header">
              <Typography.Title className="filter-todo-title">
                Filter Todos
              </Typography.Title>
            </div>
            <div className="modal-body">
              <Form
                colon={false}
                form={form}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Form.Item label="Categories" id="categoryIds">
                  <Select
                    allowClear
                    getPopupContainer={() =>
                      document.getElementById("add-todo-modal-container") ??
                      document.body
                    }
                    loading={categoryGetLoading}
                    mode="multiple"
                    options={categories.map((category) => ({
                      label: category.content,
                      value: category.id,
                    }))}
                    placeholder="Choose Categories"
                  />
                </Form.Item>
                <Form.Item label="Priority" id="priorityIds">
                  <Select
                    allowClear
                    getPopupContainer={() =>
                      document.getElementById("add-todo-modal-container") ??
                      document.body
                    }
                    mode="multiple"
                    options={[
                      { label: "None", value: "none" },
                      {
                        label: capitalize(EPriority.LOW),
                        value: EPriority.LOW,
                      },
                      {
                        label: capitalize(EPriority.MEDIUM),
                        value: EPriority.MEDIUM,
                      },
                      {
                        label: capitalize(EPriority.HIGH),
                        value: EPriority.HIGH,
                      },
                    ]}
                    placeholder="Select Priority"
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </Container.Modal>
      </Modal>
      <Container.FilterTodoButton>
        <Button
          icon={<FilterOutlined />}
          onClick={modalToggle}
          shape="circle"
          size="small"
        />
      </Container.FilterTodoButton>
    </>
  );
}
