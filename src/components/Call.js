import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Call = props => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
        contactJson {
          phone
          email
          contact_button_link
        }
    }
   `);
  return (
    <div className="call">
      {props.showButton && (
        <div className="call-box-bottom">
          <a href={data.contactJson.contact_button_link} className="button">Спробувати</a>
        </div>
      )}
    </div>
  );
};

export default Call;
