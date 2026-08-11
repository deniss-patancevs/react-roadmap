import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Button from "@/components/UI/Button";
import ProductMenu from "@/components/Product/ProductMenu";

import type {
  ButtonSize,
  ButtonVariant,
} from "@/components/UI/Button/Button.styles";

interface ProductMenuButtonProps {
  onEdit: () => void;
  onDelete: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Wrapper = styled.div`
  position: relative;
`;

function ProductMenuButton({
  onEdit,
  onDelete,
  variant = "outline",
  size = "medium",
}: ProductMenuButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleEdit = () => {
    setIsMenuOpen(false);
    onEdit();
  };

  const handleDelete = () => {
    setIsMenuOpen(false);
    onDelete();
  };

  return (
    <Wrapper ref={menuRef}>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        Menu
      </Button>

      {isMenuOpen && (
        <ProductMenu onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </Wrapper>
  );
}

export default ProductMenuButton;
