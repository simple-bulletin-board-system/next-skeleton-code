import styled from "styled-components";

interface IContainer {
  completed?: boolean;
}

const Container = styled.div<IContainer>`
  background-color: white;
  border-radius: 10px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: ${(props) => (props.completed ? "50%" : "100%")};

  .title-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }

  .categories-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    padding-left: 30px;
  }

  .priority-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    padding-left: 30px;
    margin-top: 12px;
  }

  .title-text {
    color: rgba(0, 0, 0, 0.85) !important;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    line-height: 24px;
  }

  .remove-button {
    fill: rgba(0, 0, 0, 0.45);
    height: 16px;
    width: 16px;
    margin-right: 14px;
    margin-top: 4px;
  }

  .check-box {
    margin-left: 14px;
    margin-top: 4px;
  }

  .category-text {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45) !important;
    font-weight: 500;
    margin-right: 5px;
  }
`;

export default Container;
