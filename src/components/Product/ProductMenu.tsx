import styled from "styled-components";

interface ProductMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;

  min-width: 140px;

  display: flex;
  flex-direction: column;

  padding: 8px 0;

  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};

  z-index: 10;
`;

const MenuButton = styled.button`
  width: 100%;

  padding: 10px 16px;

  border: none;
  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
  text-align: left;

  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

function ProductMenu({ onEdit, onDelete }: ProductMenuProps) {
  return (
    <Menu>
      <MenuButton type="button" onClick={onEdit}>
        Edit
      </MenuButton>

      <MenuButton type="button" onClick={onDelete}>
        Delete
      </MenuButton>
    </Menu>
  );
}

export default ProductMenu;
