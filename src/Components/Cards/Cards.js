import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>CHECK OUT THE EPIC DESTINATION!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./assets/img-9.jpg"
              text="Explore the hidden waterfall inside the Deep Amazon Jungles"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="./assets/img-2.jpg"
              text="Travel through the Islands of Bali in the Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./assets/img-3.jpg"
              text="Set Sail in the Atlantic Ocean Visitng Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="./assets/img-4.jpg"
              text="Experience Football on Top of the Himalyans Mountains"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="./assets/img-8.jpg"
              text="Ride through the Sahara Desert on a guided Camel Tour"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
