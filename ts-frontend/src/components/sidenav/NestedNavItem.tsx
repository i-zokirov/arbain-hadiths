import React from "react";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { FaRegFile } from "react-icons/fa";

interface NestedNavItemProps {
    children?: any;
    nav: string;
    [x: string]: any;
}
const NestedNavItem: React.FC<NestedNavItemProps> = ({
    children,
    nav,
    ...rest
}) => {
    return (
        <Link
            href={`#${nav}`}
            style={{ textDecoration: "none", margin: "5px" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="1"
                mx="8"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "cyan.400",
                    color: "white",
                }}
                {...rest}
            >
                <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                        color: "white",
                    }}
                    as={FaRegFile}
                />

                {children}
            </Flex>
        </Link>
    );
};

export default NestedNavItem;
