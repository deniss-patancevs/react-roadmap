import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import styled from "styled-components";

interface AddToCartModalProps {
  open: boolean;
  onClose: () => void;
}

// Styles
const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: 32px;
    max-width: 420px;
  }
`;

const Message = styled(Typography)`
  && {
    padding: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.subheading.fontSize};
    font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
    line-height: ${({ theme }) => theme.typography.subheading.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.subheading.letterSpacing};
    text-align: center;
  }
`;

const Actions = styled(DialogActions)`
  && {
    justify-content: center;
    padding: 32px 0 0;
  }
`;

const CloseButton = styled(Button)`
  && {
    min-width: 113px;
    width: 126px;
    height: 30px;
    padding: 4px;

    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 2.12px 2.12px 0 #00000040;

    font-size: ${({ theme }) => theme.typography.buttonSmall.fontSize};
    font-weight: ${({ theme }) => theme.typography.buttonSmall.fontWeight};
    line-height: ${({ theme }) => theme.typography.buttonSmall.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.buttonSmall.letterSpacing};
    text-transform: uppercase;
    color: white;

    &:hover {
      background: #1e33aa;
      box-shadow: 0 2.12px 2.12px 0 #00000040;
    }
  }
`;

// Component
function AddToCartModal({ open, onClose }: AddToCartModalProps) {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogContent>
        <Message>Product successfully added to the cart!</Message>
      </DialogContent>

      <Actions>
        <CloseButton onClick={onClose}>Close window</CloseButton>
      </Actions>
    </StyledDialog>
  );
}

export default AddToCartModal;
