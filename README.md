# Portfolio Next.js

## Run the development server

Run `npm run dev` in your terminal, and go to `https://localhost:3000/`.

## Push the changes online

As before, to push your changes online open GitHub Desktop and add everything from there. 

## Edit content

Every text content can be found in the folder `/content/`. The `about` page is written in Markdown, but other pages are in JS. To edit the content, just replace the content between `""`.

### General content

All the general content (email address, name of the website, etc.) are located inside the file `content/SiteData.js`. To add the site's keywords, add this between the `[]`:

```
"keyword", "keyword"
```

THE KEYWORDS ARE SUPER IMPORTANT FOR SEO

### Navigation links

To edit the nav links, go to the file `/content/NavLinks.js`. In the `const NavLinks`, add or delete this: 

```
{
    title: "What is appearing on the menu",
    url: "/link-to-the-page",
},
```

### Social links

To add a social link, download the SVG icon on [Font Awesome](https://fontawesome.com/), and put it in the folder `public/icons`. After you did this, open the file `content/SocialLinks.js` and add this in the `const NavLinks`:

```
{
    name: "icon-name",
    link: "https://www.link-to-social.com",
},
```

### Footer texts

To edit the text inside the footer, open the file `content/FooterUi.js` and edit the content inside. 

### Homepage UI

To edit texts on the homepage, go the file `content/ContentHome.js` and edit them there.

### Projects UI

To edit texts on the projects pages (buttons, etc.), open the file `content/ProjectUi.js` and edit them there.

## Projects

### Add a project

Create a new page called `name-of-project.mdx` in the folder `projects`. On top of the page copy this:

```
---
title: Name of the project
order: 1 (Order in the list)
coverHome: name-of-the-file.jpg
desc: Meta description (WRITE IT IT'S IMPORTANT FOR SEO)
nextProject: name-of-next-project
cover: name-of-the-file.jpg
type: Subtitle of the project
descShort: Text displayed on homepage and in the cover
keywords:
    - keyword (WRITE THEM THEY'RE IMPORTANT FOR SEO)
    - keyword
---
```

Then below, you can add your content.

If the project is on another website (Medium, etc.), copy this on top of the page:

```
---
title: Title of project
order: 1 (Order in the list)
coverHome: name-of-the-file.jpg
desc: Meta description (WRITE IT IT'S IMPORTANT FOR SEO)
type: Subtitle of the project
descShort: Text displayed on homepage
keywords:
    - keyword (WRITE THEM THEY'RE IMPORTANT FOR SEO)
    - keyword
link: "https://url-to-the-project.com"
website: Name of the website it's hosted on
---
```

#### Components used in projects

##### Section with text

```
<Section title="Title">

Text content

</Section>
```

##### Section with image only

```
<Section
    title="Title"
    img="name-of-image.jpg"
    altImg="Alt text of image"
/>
```

##### Section with text and image

```
<Section
    title="Title"
    img="name-of-image.jpg"
    altImg="Alt text of image"
>

Research showed that the biggest problem during organizing a group event is deciding and agreeing on a specific meeting venue that would suit all the participants and their needs. I conducted several interviews, in which people were complaining that the main reason of not coming for the meeting is the place - usually they don’t like it or it’s too far from the place where they live.

</Section>
```

##### Section with steps

```
<Steps
    title1="Title of the first square"
    content1="Content in the first square"
    title2="Title of the second square"
    content2="Content in the second square"
    title3="Title of the third square"
    content3="Content in the third square"
/>
```

##### Section with prototype

If you don't want a shadow, delete the `shadow` in the tag.

```
<Prototype
    title="Title"
    img="name-of-image.jpg"
    altImg="Alt text of image"
    video="https://www.link-to-embed-youtube.com"
    shadow
/>
```

##### Quotes

For the quote component (a gray rectangle with text inside), use this:

```
> Content
```

##### Links

To put a link inside the text, if you want to open in a new tab type this: 

```
<a href="https://link.com/" target="_blank" rel="noopener noreferrer">Text displayed</a>
```

For links without new tab, type this:

```
[Text displayed](https://link.com/)
```

## About page

Open the page `content/about.md` to edit the content inside the page. 