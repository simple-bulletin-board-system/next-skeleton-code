import { ChangeEvent, useEffect, useState } from "react";

import {
  Button,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Select,
  Slider,
  Typography,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

import capitalize from "lodash/capitalize";
import LoadingStatus from "@/constants/loading/status";
import { EPriority } from "@/models/todo.model";
import { ICategory } from "@/models/category.model";

import * as Container from "./style";

interface IAddTodoCategory extends ICategory {
  id: number;
}

interface IAddTodo {
  addCategory: (category: ICategory) => void;
  categories: IAddTodoCategory[];
  categoryGetLoading?: boolean;
  categoryPostLoading?: LoadingStatus;
  disabled?: boolean;
  open?: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function AddTodo({
  addCategory,
  disabled = false,
  categories,
  categoryGetLoading = false,
  categoryPostLoading,
  open = false,
  onClose,
  onOpen,
}: IAddTodo) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [categoryContent, setCategoryContent] = useState<string>("");
  const [abledAddCategory, setAbledAddCategory] = useState<boolean>(false);

  const onAddCategoryClick = (value: string) => {
    addCategory({ content: value });
  };

  const onAddCategoryInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const abled = value.trim().length > 0;
    setAbledAddCategory(abled);
    setCategoryContent(value);
  };

  useEffect(() => {
    switch (categoryPostLoading) {
      case LoadingStatus.SUCCESS:
        messageApi.open({
          type: "success",
          content: "😊 Completed category registration successfully.",
        });
        setCategoryContent("");
        break;
      case LoadingStatus.FAIL:
        messageApi.open({
          type: "error",
          content: "🙏 Sorry, Failed to get category list.",
        });
        break;
      default:
        break;
    }
  }, [categoryPostLoading]);

  return (
    <>
      {contextHolder}
      <Modal
        destroyOnClose
        open={open}
        okText="Save"
        onCancel={onClose}
        width={1000}
      >
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
                          <Input
                            className="add-todo-category-input"
                            onChange={onAddCategoryInputChange}
                            value={categoryContent}
                          />
                          <Button
                            className="add-todo-category-button"
                            disabled={!abledAddCategory}
                            loading={
                              categoryPostLoading === LoadingStatus.PENDING
                            }
                            icon={<PlusOutlined />}
                            onClick={() => onAddCategoryClick(categoryContent)}
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
                    loading={categoryGetLoading}
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
          onClick={onOpen}
          type="primary"
        />
      </Container.AddTodoButton>
    </>
  );
}
