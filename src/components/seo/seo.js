import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import androidIcon36x36 from "../../assets/favicon/android-icon-36x36.png";
import androidIcon48x48 from "../../assets/favicon/android-icon-48x48.png";
import androidIcon72x72 from "../../assets/favicon/android-icon-72x72.png";
import androidIcon96x96 from "../../assets/favicon/android-icon-96x96.png";
import androidIcon144x144 from "../../assets/favicon/android-icon-144x144.png";
import androidIcon192x192 from "../../assets/favicon/android-icon-192x192.png";

import appleIcon57x57 from "../../assets/favicon/apple-icon-57x57.png";
import appleIcon60x60 from "../../assets/favicon/apple-icon-60x60.png";
import appleIcon72x72 from "../../assets/favicon/apple-icon-72x72.png";
import appleIcon76x76 from "../../assets/favicon/apple-icon-76x76.png";
import appleIcon114x114 from "../../assets/favicon/apple-icon-114x114.png";
import appleIcon120x120 from "../../assets/favicon/apple-icon-120x120.png";
import appleIcon144x144 from "../../assets/favicon/apple-icon-144x144.png";
import appleIcon152x152 from "../../assets/favicon/apple-icon-152x152.png";
import appleIcon180x180 from "../../assets/favicon/apple-icon-180x180.png";

import favicon16x16 from "../../assets/favicon/favicon-16x16.png";
import favicon32x32 from "../../assets/favicon/favicon-32x32.png";
import favicon96x96 from "../../assets/favicon/favicon-96x96.png";

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

            <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
            <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60x60} />
            <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
            <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
            <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
            <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
            <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
            <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
            <link rel="icon" type="image/png" sizes="36x36" href={androidIcon36x36} />
            <link rel="icon" type="image/png" sizes="48x48" href={androidIcon48x48} />
            <link rel="icon" type="image/png" sizes="72x72" href={androidIcon72x72} />
            <link rel="icon" type="image/png" sizes="96x96" href={androidIcon96x96} />
            <link rel="icon" type="image/png" sizes="144x144" href={androidIcon144x144} />
            <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192x192} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
            <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
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