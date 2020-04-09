import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, twitterUrl }) => {
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        defaultDescription,
        defaultTwitterUrl,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        twitterUrl: twitterUrl || defaultTwitterUrl,
    }

    return (
        <Helmet title={seo.title}>
            <meta name="description" description={seo.description} />
            <meta name="twitter" content={seo.twitterUrl} />
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