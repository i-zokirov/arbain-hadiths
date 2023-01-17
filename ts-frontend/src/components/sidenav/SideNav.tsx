import React, { ReactNode } from "react";
import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
} from "@chakra-ui/react";

import SidebarContent from "./SidebarContent";
import MobileNav from "./MobileNav";

export default function SidebarWithHeader({
    children,
}: {
    children: ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent overflow={"scroll"}>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>

            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 80 }} p="4">
                {children}
            </Box>
            <Box
                ml={{ base: 0, md: 80 }}
                p="4"
                position={"fixed"}
                bottom={0}
                bg={useColorModeValue("gray.100", "gray.900")}
                width="full"
            >
                © 2023.{" "}
                <a
                    href="https://n.ziyouz.com/books/islomiy/hadis/Imom%20Navaviy.%20Arbain%20hadis.pdf"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    Manba - Ziyouz kutbxonasi
                </a>
            </Box>
        </Box>
    );
}
