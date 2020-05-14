module.exports = {
    siteMetadata: {
        title: `Join Plummmm's Team`,
        description: `If you're interested in building things as what I'm interested in, we're happy to have you join our team to develop the projects.`,
        author: `@plumsirawit`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Join Plummmm's Team`,
                short_name: `join-plummmm`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icons: [],
                legacy: false,
                include_favicon: false
                //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
