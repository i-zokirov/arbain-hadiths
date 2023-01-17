import React from "react";
import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    Text,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";
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
                {hadith.split("\n").map((p, i) => {
                    if (p.includes("$unorderedlist")) {
                        return (
                            <UnorderedList>
                                {p
                                    .split("$unorderedlist")
                                    .map((li, indx) =>
                                        indx === 0 ? (
                                            <Text key={indx}>{li}</Text>
                                        ) : (
                                            <ListItem key={indx}>{li}</ListItem>
                                        )
                                    )}
                            </UnorderedList>
                        );
                    } else {
                        return <Text key={i}>{p}</Text>;
                    }
                })}
            </CardBody>
        </Card>
    );
};

export default HadithCard;
