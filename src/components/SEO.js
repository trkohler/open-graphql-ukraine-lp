import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import favicon from "../../static/favicon-32x32.svg";

const SEO = (props) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const title = props.title || data.site.siteMetadata.title;
      const noIndex = props.noIndex || false;
      return (
        <Helmet
          htmlAttributes={{
            lang: "uk",
          }}
          title={title}
          titleTemplate={
            props.title ? `%s` : `%s - ${data.site.siteMetadata.title}`
          }
          link={[
            { rel: "shortcut icon", type: "image/svg", href: `${favicon}` },
          ]}
        >
          {noIndex ? <meta name="robots" content="none" /> : null}
        </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: "uk",
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
