import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInpu from "./SearchInpu";

const NavBar = () => {
  return (
    <HStack padding={10}>
      <Image src={logo} boxSize="60px" />
      <SearchInpu />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
