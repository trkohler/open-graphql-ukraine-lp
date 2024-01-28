import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const Call = (props) => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      contactJson {
        contact_button_link
      }
    }
  `);
  return (
    <div className="call">
      {props.showButton && (
        <div className="call-box-bottom">
          <a
            href={data.contactJson.contact_button_link}
            className="button"
            onClick={() => {
              trackCustomEvent({
                category: "Бажання спробувати",
                action: "Click",
                label: "Кнопка 'спробувати'",
                value: 1,
              });
            }}
          >
            Спробувати
          </a>
        </div>
      )}
    </div>
  );
};

export default Call;
