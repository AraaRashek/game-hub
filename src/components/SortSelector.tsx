import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Box >
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By : Relevence
        </MenuButton>
        <MenuList>
          <MenuItem>Any</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
