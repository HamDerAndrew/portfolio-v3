import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, twitterUser }) => {
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        defaultDescription,
        defaultTwitterUser,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        twitterUser: twitterUser || defaultTwitterUser,
    }

    return (
        <Helmet title={seo.title}>
            <html lang="en" />
            <meta name="description" description={seo.description} />
            <meta name="Description" content={seo.description} />
            <meta name="twitter" content={seo.twitterUrl} />
            <meta name="robots" content="index, follow" />

            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:site" content={seo.twitterUser} />
            <meta name="twitter:creator" content={seo.twitterUser} />
        </Helmet>
    )
}

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    twitterUrl: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
    twitterUrl: null,
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title
                description
                twitterUsername
            }
        }
    }

`