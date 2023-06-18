import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../zustandStore";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const onSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrders = [
    { value: "relevence", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By :
          {(sortOrders.find((so) => so.value === sortOrder) || {}).label ||
            "Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((sortOrder) => (
            <MenuItem
              onClick={() => {
                onSelectSortOrder(sortOrder.value);
              }}
              key={sortOrder.value}
              value={sortOrder.value}
            >
              {sortOrder.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
