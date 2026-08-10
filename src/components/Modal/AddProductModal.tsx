import { useState } from "react";
import styled from "styled-components";
import type { Product } from "@/types/product";
import InputField from "../Form/InputField";
import TextareaField from "../Form/TextareaField";
import { createProduct } from "@/api/products";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  onProductAdded: (product: Product) => void;
}

interface FormData {
  name: string;
  price: string;
  currency: string;
  year: string;
  ram: string;
  warranty: string;
  description_short: string;
  description_full: string;
  features: string;
  image: string;
  stock: string;
}

const initialFormData: FormData = {
  name: "",
  price: "",
  currency: "EUR",
  year: "",
  ram: "",
  warranty: "",
  description_short: "",
  description_full: "",
  features: "",
  image: "",
  stock: "",
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.45);
`;

const Modal = styled.div`
  width: 650px;
  max-height: 90vh;
  overflow-y: auto;

  padding: 32px;

  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const Title = styled.h2`
  margin: 0 0 24px;

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  margin-top: 8px;
`;

const ActionButton = styled.button`
  min-width: 120px;
  height: 44px;

  padding: 0 16px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};

  font: inherit;
  font-weight: 500;
  text-transform: uppercase;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:first-child {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ErrorMessage = styled.p`
  margin: 0;

  color: #d32f2f;
  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
  line-height: 20px;
`;

function AddProductModal({
  open,
  onClose,
  onProductAdded,
}: AddProductModalProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!open) {
    return null;
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const productData = {
        id: 34,
        name: formData.name,
        price: Number(formData.price),
        currency: formData.currency,
        year: Number(formData.year),
        ram: formData.ram,
        warranty: Number(formData.warranty),

        description_short: formData.description_short,
        description_full: formData.description_full,

        features: formData.features
          .split("\n")
          .map((feature) => feature.trim())
          .filter(Boolean),

        image: formData.image,
        stock: Number(formData.stock),
      };

      const product = await createProduct(productData);

      onProductAdded(product);

      setFormData(initialFormData);
      onClose();
    } catch (error) {
      console.error(error);
      setError("Failed to add product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData(initialFormData);
    onClose();
  };

  return (
    <Overlay onMouseDown={handleClose}>
      <Modal onMouseDown={(event) => event.stopPropagation()}>
        <Title>Add New Product</Title>

        <Form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Row>
            <InputField
              label="Price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <InputField
              label="Currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            />
          </Row>

          <Row>
            <InputField
              label="Year"
              name="year"
              type="number"
              value={formData.year}
              onChange={handleChange}
            />

            <InputField
              label="RAM"
              name="ram"
              value={formData.ram}
              onChange={handleChange}
            />
          </Row>

          <Row>
            <InputField
              label="Warranty"
              name="warranty"
              min="0"
              value={formData.warranty}
              onChange={handleChange}
            />

            <InputField
              label="Stock"
              name="stock"
              type="number"
              min="0"
              value={formData.stock}
              onChange={handleChange}
            />
          </Row>

          <TextareaField
            label="Short description"
            name="description_short"
            value={formData.description_short}
            onChange={handleChange}
            required
          />

          <TextareaField
            label="Full description"
            name="description_full"
            value={formData.description_full}
            onChange={handleChange}
            required
          />

          <TextareaField
            label="Features"
            name="features"
            placeholder="One feature per line"
            value={formData.features}
            onChange={handleChange}
          />

          {/* Error */}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Actions>
            <ActionButton
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </ActionButton>

            <ActionButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Product"}
            </ActionButton>
          </Actions>
        </Form>
      </Modal>
    </Overlay>
  );
}

export default AddProductModal;
