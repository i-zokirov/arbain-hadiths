import React from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <Box>
            <Flex
                bg={useColorModeValue("gray.100", "gray.900")}
                align="center"
                justify="center"
                css={{
                    backgroundAttachment: "fixed",
                }}
                id="contact"
            >
                <Box
                    borderRadius="lg"
                    m={{ base: 5, md: 16, lg: 10 }}
                    p={{ base: 5, lg: 16 }}
                >
                    <Box>
                        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                            <Heading
                                fontSize={{
                                    base: "4xl",
                                    md: "5xl",
                                }}
                            >
                                Aloqa Uchun
                            </Heading>

                            <Box
                                bg={useColorModeValue("white", "gray.700")}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue(
                                    "gray.700",
                                    "whiteAlpha.900"
                                )}
                                shadow="base"
                            >
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement
                                                children={<BsPerson />}
                                            />
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement
                                                children={<MdOutlineEmail />}
                                            />
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>

                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={6}
                                            resize="none"
                                        />
                                    </FormControl>

                                    <Button
                                        colorScheme="blue"
                                        bg="blue.400"
                                        color="white"
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </VStack>
                            </Box>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Contact;
