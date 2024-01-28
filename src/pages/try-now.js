// call to action page;
import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const TryNow = (props) => {
  const { intro } = props.data;
  const introImageClasses = `intro-image ${
    intro.frontmatter.intro_image_absolute && "intro-image-absolute"
  } ${
    intro.frontmatter.intro_image_hide_on_mobile && "intro-image-hide-mobile"
  }`;

  return (
    <Layout bodyClass="page-teams">
      <SEO title="Спробувати" noIndex />

      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
            {intro.frontmatter.intro_image && (
              <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
                <img
                  alt={intro.frontmatter.title}
                  className={introImageClasses}
                  src={intro.frontmatter.intro_image}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    team: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/.*/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            promoted
            image
            jobtitle
            linkedinurl
          }
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: { regex: "/(team.md)/" }) {
      html
      frontmatter {
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
      }
    }
  }
`;

export default TryNow;
