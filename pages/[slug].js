// Packages
import React from "react"

// Components
import ProjectTemplate from "../components/layouts/ProjectTemplate"

// MDX components
import { getAllPostSlugs, getPostdata } from "../lib/posts"
import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"

// Projects components
import Prototype from "../components/project/Prototype"
import Section from "../components/project/Section"
import Steps from "../components/project/Steps"

const components = { Prototype, Section, Steps }

export default function ProjectPage({ source, frontMatter }) {
    const content = hydrate(source, { components })
    return (
        <ProjectTemplate
            title={frontMatter.title}
            description={frontMatter.desc}
            keywords={frontMatter.keywords}
            subtitle={frontMatter.type}
            img={frontMatter.cover}
            intro={frontMatter.descShort}
            next={frontMatter.nextProject}
        >
            {content}
        </ProjectTemplate>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs()
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params }) {
    const postContent = await getPostdata(params.slug)
    const { data, content } = matter(postContent)
    const mdxSource = await renderToString(content, {
        components,
        scope: data,
    })
    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}
