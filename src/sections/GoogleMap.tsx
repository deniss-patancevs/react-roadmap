import styled from "styled-components";

interface GoogleMapProps {
  address: string;
}

const MapFrame = styled.iframe`
  display: block;

  width: 100%;
  height: 323px;

  border: 0;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.desktop}) {
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    height: 280px;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.phone}) {
    height: 250px;
  }
`;

function GoogleMap({ address }: GoogleMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <MapFrame
      src={src}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
  );
}

export default GoogleMap;
