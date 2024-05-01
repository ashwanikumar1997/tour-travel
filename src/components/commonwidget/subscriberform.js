/**
 * @author ashwani kumar
 * @email ashwanikumar@inimist.com
 * @create date 2023-09-03 10:50:22
 * @modify date 2023-09-03 11:50:22
 * @desc [description]
 */
import React from "react";
import { useState } from "react";
import { createSubscriber } from "../../utils/apiHelper";
import { AlertPopUp } from "../../validation/alert";

const SubscriberForm = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    let data = { email: email };
    if (!data) {
      setError("email is required!");
    }
    createSubscriber(data).then((response) => {
      if (response) {
        setError(response.data.message);
        setEmail("");
      } else if (response.status == 400) {
        setIsError(true);
        setError(response.message);
      }
    });
  };

  if (error) {
    setTimeout(() => {
      setError("");
    }, 1000);
  }

  return (
    <div>
      {error ? (
        <AlertPopUp severity={isError ? "error" : "success"}>
          {error}
        </AlertPopUp>
      ) : (
        <form
          id="mc4wp-form-1"
          className="mc4wp-form mc4wp-form-3083"
          data-id="3083"
          data-name="Newsletter"
          onSubmit={onsubmit}
        >
          <div className="mc4wp-form-fields">
            <input
              type="email"
              name="EMAIL"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              required
            />
            <br />
            <input type="submit" value="Subscribe" />
          </div>
        </form>
      )}
    </div>
  );
};
export default SubscriberForm;
