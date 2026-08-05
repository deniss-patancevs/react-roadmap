import styled from "styled-components";

interface GoogleMapProps {
  address: string;
}

const MapFrame = styled.iframe`
  width: 745px;
  height: 323px;
  border: 0;
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
