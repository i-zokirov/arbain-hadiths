import React from "react";

import { Box } from "@chakra-ui/react";
import AboutCard from "../components/cards/AboutCard";
import hadiths from "../data/hadislar";
import HadithCard from "../components/cards/HadithCard";
const Home = () => {
    return (
        <Box>
            <section style={{ margin: "15px" }} id={`muallif-haqida`}>
                <AboutCard />
            </section>
            {hadiths.map((hadith) => (
                <section
                    id={`${hadith.no}-hadis`}
                    key={`${hadith.no}-hadis`}
                    style={{ margin: "15px" }}
                >
                    <HadithCard no={hadith.no} hadith={hadith.hadith} />
                </section>
            ))}
        </Box>
    );
};

export default Home;
