import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  justify-content: center;
  margin: auto;

  .todos {
    &-title {
      font-size: 42px !important;
      font-weight: 400;
      margin-top: 74px;
    }

    &-list {
      margin-top: 40px;
    }

    &-container {
      margin-top: 10px;
    }
  }

  .ant {
    &-list {
      &-items {
        & > div {
          margin-top: 10px;
        }
      }
    }
  }

  .divider {
    margin: 30px 0 20px !important;
    border-top: 1px solid #e9e9e9 !important;
  }
`;

export default Container;
