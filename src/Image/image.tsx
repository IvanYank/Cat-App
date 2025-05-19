import styled from 'styled-components';

type ImageProps = {
  image: string,
}

const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export default function Image({ image }: ImageProps) {
  return (
    <div>
      <StyledImage src={image} alt='cat image' />
    </div>
  );
}
