import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

// sintax de herença de estilos de um elemento pai
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 3px solid ${(props) => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
// fim da sintax de herença de estilos de um elemento pai

export const CountTimerContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  font-weight: bold;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  color: ${(props) => props.theme["gray-100"]};

  p {
    border-radius: 2px;
    background: ${(props) => props.theme["gray-700"]};
  }
`;

export const ButtonTimer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;

  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const Separator = styled.div`
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme["green-500"]};
`;
