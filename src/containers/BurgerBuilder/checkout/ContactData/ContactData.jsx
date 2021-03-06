import React, { Component } from "react";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import axios from "../../../../axios-orders";
import Button from "../../../../components/UI/Modal/Button/Button";
import "./ContactData.css";
import Input from "../../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-Mail",
        },
        value: "",
      },
      deliveryTime: {
        elementType: "select",
        elementConfig: {
          option: [
            { value: "normal", displayValue: "Normal" },
            { value: "fast", displayValue: "Fast" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
    event.preventDefault();
  };

  render() {
    let form = (
      <form>
        <Input elementType="..." elementConfig="..." value="..." />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postalCode"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading === true) {
      form = <Spinner />;
    }
    return (
      <div className="contactData">
        <h4>Fill Your Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
