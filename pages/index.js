// Packages
import React from "react"

// Components
import Page from "../components/layouts/Page"
import Cover from "../components/home/Cover"
import Container from "../components/layouts/Container"
import Card from "../components/home/Card"

import { getSortedPosts } from "../lib/posts"

export default function Home({ allPostsData }) {
    return (
        <Page title="Home">
            <Cover />

            <Container id="portfolio">
                {allPostsData.map(
                    ({
                        slug,
                        title,
                        type,
                        coverHome,
                        link,
                        website,
                        descShort,
                    }) =>
                        website ? (
                            <Card
                                url={link}
                                title={title}
                                key={slug}
                                subtitle={type}
                                img={coverHome}
                                site={website}
                            >
                                {descShort}
                            </Card>
                        ) : (
                            <Card
                                url={link ? link : "/[slug]"}
                                as={`/${slug}`}
                                title={title}
                                key={slug}
                                subtitle={type}
                                img={coverHome}
                            >
                                {descShort}
                            </Card>
                        )
                )}
            </Container>
        </Page>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPosts()
    return {
        props: {
            allPostsData,
        },
    }
}
