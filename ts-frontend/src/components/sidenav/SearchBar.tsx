import React from "react";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    const handleClick = () => {};
    return (
        <InputGroup size="md">
            <Input pr="4.5rem" type={"text"} placeholder="Kalit so'z..." />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    <CiSearch />
                </Button>
            </InputRightElement>
        </InputGroup>
    );
};

export default SearchBar;
