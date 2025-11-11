import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Nikan's Notebook",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notes.nikanostovan.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Geo",
        body: "Expletus Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#797593",
          //light: "#faf4ed",
          lighter: " #c4a7e7",
          lightest: " #faf4ed",
          lightgray: "#e5e5e5",
          gray: "#907aa9",
          darkgray: "#575279",
          dark: "#b4637a",
          secondary: "#3e8fb0",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#232136", // background color
          lighter: "#393552",
          lightest: " #797593",
          lightgray: "#286983", // searchbar and highlights
          gray: "#c4a7e7", // Date time
          darkgray: "#faf4ed", // body font color
          dark: "#f6c177", // markdown header color
          secondary: "#FFB3B3", //header and link font color
          tertiary: "#9ccfd8",
          highlight: "rgba(143, 159, 169, 0.15)", //highlights for double links and tags
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
