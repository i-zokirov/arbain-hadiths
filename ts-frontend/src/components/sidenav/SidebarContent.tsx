import React, { useState } from "react";
import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Text,
    BoxProps,
    Divider,
    MenuList,
    MenuItem,
    Collapse,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
} from "react-icons/fi";
import NavItem from "./NavItem";
import { IconType } from "react-icons";
import { CiPhone } from "react-icons/ci";
import { AiOutlineBook } from "react-icons/ai";
import SearchBar from "./SearchBar";
import NestedNavItem from "./NestedNavItem";
import { FaBookOpen } from "react-icons/fa";
interface LinkItemProps {
    name: string;
    icon: IconType;
    nested?: { title: string }[];
}
const LinkItems: Array<LinkItemProps> = [
    { name: "Muallif Haqida", icon: FiHome },
    { name: "Hadislar", icon: FaBookOpen },
    { name: "Aloqa", icon: CiPhone },
];

const children = [];
for (let i = 0; i <= 40; i++) {
    children.push({ title: `${i + 1}-hadis` });
}

LinkItems[1].nested = children;

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const [selectedWindow, setSelectedWindow] = useState<string | null>(null);

    const handleWindowClick = (title: string) => {
        setSelectedWindow(title);
    };
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 80 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Box>
                    <Text
                        fontSize="2xl"
                        fontFamily="monospace"
                        fontWeight="bold"
                    >
                        Arba`in Hadis
                    </Text>
                    <Text
                        fontSize="1xl"
                        fontFamily="monospace"
                        fontWeight="bold"
                    >
                        Imom an-Navaviy
                    </Text>
                </Box>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            <Divider />
            <Box padding="5">
                <SearchBar />
            </Box>
            {LinkItems.map((link, index) => (
                <React.Fragment key={index}>
                    <Box marginTop={"1"}>
                        <NavItem
                            key={link.name}
                            icon={link.icon}
                            selected={link.name === selectedWindow}
                            onClick={() => handleWindowClick(link.name)}
                        >
                            {link.name}
                        </NavItem>
                    </Box>
                    {link.nested?.length && (
                        <React.Fragment>
                            <Collapse
                                animateOpacity
                                in={link.name === selectedWindow}
                            >
                                <Box
                                    style={{ padding: "8px 3px 8px 8px" }}
                                    overflowY={"scroll"}
                                    maxHeight="50vh"
                                >
                                    {link.nested.map((item, index) => (
                                        <NestedNavItem
                                            key={index}
                                            nav={item.title}
                                            onClick={onClose}
                                        >
                                            {item.title}
                                        </NestedNavItem>
                                    ))}
                                </Box>
                            </Collapse>
                        </React.Fragment>
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};

export default SidebarContent;
