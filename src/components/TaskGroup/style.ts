import styled from 'styled-components';

export const TaskWrapper = styled.section`
  margin-top: -30px;
  width: 736px;
  margin: -30px auto 0;
  max-width: 736px;
`;

export const TaskListWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 8px;

    p {
      color: #4ea8de;
      font-size: 14px;
      font-weight: 700;

      span {
        margin-left: 8px;
        color: #d9d9d9;
        font-size: 12px;
        font-weight: 700;
        background: #333333;
        border-radius: 999px;
        padding: 2px 8px;
        width: fit-content;
        display: inline-block;
      }
    }
  }
  color: white;
`;

export const TaskFormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 638px;
    height: 54px;
    padding: 16px;
    background-color: #262626;
    border: 1px solid #0d0d0d;
    border-radius: 8px;
    flex-grow: 1;
    flex: none;
    color: #fff;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 90px;
    height: 52px;
    background-color: #1e6f9f;
    border-radius: 8px;

    font-size: 14px;
    font-weight: 700;
    color: #f2f2f2;
  }
`;
