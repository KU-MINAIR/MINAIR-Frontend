import styled from "styled-components";

interface VerticalLineProps {
  height: string;
  color: string;
}

export default function VerticalLine({ height, color }: VerticalLineProps) {
  return <Vertical height={height} color={color}></Vertical>;
}

const Vertical = styled.div<VerticalLineProps>`
  height: ${(props) => props.height};
  width: 0px;
  border-left: 1px solid ${(props) => props.color};
`;
