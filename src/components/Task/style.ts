import styled from 'styled-components';
import checkImage from '../../assets/check-image.png';
import correctImage from '../../assets/correct-image.png';

interface ICompletedTask {
  readonly completedTask: boolean;
}

export const Container = styled.div<ICompletedTask>`
  display: flex;
  justify-content: space-between;
  gap: 11px;
  padding: 16px;

  background-color: #262626;
  border: 1px solid ${(props) => (props.completedTask ? '#262626' : '#333333')};
  text-decoration: ${(props) => (props.completedTask ? 'line-through' : 'none')};
  box-shadow: ${(props) => (props.completedTask ? 'unset' : '0px 2px 8px rgba(0, 0, 0, 0.06)')};
  border-radius: 8px;
  span {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${(props) => (props.completedTask ? correctImage : checkImage)});
  }

  p {
    width: fit-content;
    max-width: 632px;
    margin-right: auto;
  }

  svg {
    cursor: pointer;
  }
`;
