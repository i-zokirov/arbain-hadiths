import React from "react";
import { Flex, Icon, Link, FlexProps } from "@chakra-ui/react";

import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: any;
    selected: boolean;
}
const NavItem = ({ icon, selected, children, ...rest }: NavItemProps) => {
    return (
        <Link
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="3"
                mx="3"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "cyan.400",
                    color: "white",
                }}
                bg={selected ? "cyan.400" : ""}
                color={selected ? "white" : ""}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

export default NavItem;
