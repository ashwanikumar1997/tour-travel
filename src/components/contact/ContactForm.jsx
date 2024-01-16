/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:52:22
 * @modify date 2019-09-03 10:52:22
 * @desc [description]
 */
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import TextFieldGroup from "../common/TextFieldGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Proptypes from "prop-types";
import { connect } from "react-redux";

import { registerUser } from "../../actions/authActions";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      persons: "",
      email: "",
      phone: "",
      tour_date: "",
      startDate: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange = (date) => {
    this.setState({
      tour_date: date,
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      full_name: this.state.name,
      persons: this.state.persons,
      email: this.state.email,
      phone: this.state.phone,
      tour_date: this.state.tour_date,
      tourId: this.props.match.params.id,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.close}>
        <Modal.Body closebutton>
          <div className="page_title_content">
            <div
              className="page_title_small_content"
              style={{ textAlign: "center" }}
            >
              <h1>Niko Trip</h1>
              <h3>
                <span>Start from</span>
              </h3>
              <h2>$6,000</h2>
            </div>
          </div>
          <form onSubmit={this.onSubmit} id="signupForm">
            <TextFieldGroup
              placeholder="Full Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextFieldGroup
              placeholder="Number of Person"
              name="persons"
              value={this.state.persons}
              onChange={this.onChange}
              error={errors.persons}
            />
            <TextFieldGroup
              placeholder="Phone Number"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <label>Tour Date</label>
            <DatePicker
              selected={this.state.tour_date}
              name="tour_date"
              placeholder="Select your birthday"
              dateFormat="MMMM d, yyyy"
              onChange={this.handleChange}
            />
            <input type="submit" className="btn btn-info btn-block" />
            <input
              type="button"
              className="btn btn-info btn-block"
              onClick={this.props.close}
              value="Close"
            />
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

// export default ContactForm;

ContactForm.propTypes = {
  registerUser: Proptypes.func.isRequired,
  auth: Proptypes.object.isRequired,
  errors: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(ContactForm);
