import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Form = (props) => {
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
        <form
          name="lead"
          onSubmit={(e) => {
            const { email, name, company } = e.target;
            const data = {
              email: email.value,
              name: name.value,
              company: company.value,
            };
            console.log(data);
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": "lead",
                ...data,
              }),
            })
              .then(() => {
                trackCustomEvent({
                  category: "Lead",
                  action: "Form submitted",
                  label: "Call to action",
                });
              })
              .catch((_error) => {});
            e.preventDefault();
            window.location.href = data.contactJson.contact_button_link;
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Ім'я"
                  id="name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="company"
                  placeholder="Компанія"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <input className="button" type="submit" value="Записатись на тест" />
        </form>
      )}
    </div>
  );
};

export default Form;
