import React from "react";
import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";
const HadithCard: React.FC<{ no: number; hadith: string }> = ({
    no,
    hadith,
}) => {
    return (
        <Card>
            <CardHeader>
                <Heading size="sm" fontWeight={"500"}>
                    {no} - hadis
                </Heading>
            </CardHeader>
            <CardBody>
                {hadith.split("\n").map((p, i) => (
                    <Text key={i}>{p}</Text>
                ))}
            </CardBody>
        </Card>
    );
};

export default HadithCard;
