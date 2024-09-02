import styled from "styled-components";
interface Props {
  state: string
}
export const SidebarMenu = styled.aside<Props>`
  position: absolute;
  left: 0;
  top: 12vh;
  height: 88vh;
  overflow-x: hidden;
  width: ${({ state }:Props) => (state === 'disabled' ? '0' : '220px')};
  transition: 0.5s;
  background-image: linear-gradient(95deg, #0037ff, #b853ff);
`