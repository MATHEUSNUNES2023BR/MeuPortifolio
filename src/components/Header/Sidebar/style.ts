import styled from "styled-components";
interface Props {
  state: string
}
export const SidebarMenu = styled.aside<Props>`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 12vh;
  height: 88vh;
  overflow-x: hidden;
  width: ${({ state }:Props) => (state === 'disabled' ? '0' : '220px')};
  transition: 0.55s;
  background-image: ${({theme}) => theme.backgroudSidebar};
`