import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";

interface QuantityCounterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled.button<{ $variant: "decrease" | "increase" }>`
  width: 45px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #00000033;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;

  background: ${({ $variant, theme }) =>
    $variant === "increase" ? theme.colors.primary : "transparent"};

  color: ${({ $variant, theme }) =>
    $variant === "increase" ? theme.colors.background : theme.colors.primary};
`;

const Quantity = styled.span`
  width: 45px;
  height: 48px;
  margin: 0 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.typography.heading.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading.fontWeight};
  color: ${({ theme }) => theme.colors.text};
`;

function QuantityCounter({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityCounterProps) {
  return (
    <Counter>
      <CounterButton $variant="decrease" type="button" onClick={onDecrease}>
        {quantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
      </CounterButton>

      <Quantity>{quantity}</Quantity>

      <CounterButton $variant="increase" type="button" onClick={onIncrease}>
        <AddIcon />
      </CounterButton>
    </Counter>
  );
}

export default QuantityCounter;
