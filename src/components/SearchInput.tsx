import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search Games" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
