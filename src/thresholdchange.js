import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";

function Threshold() {
  const { state } = useLocation();
  const { name } = state;
  console.log(state);
  const [familymembers, setFamilyMembers] = useState(0);
  const [guests, setGuests] = useState(0);

  return (
    <div class="back">
      <div class="div-center">
        <div class="content">
          <h3>Welcome, {name}</h3>
          <hr />
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Family Members</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                value={familymembers}
                placeholder="Family Members"
                onChange={(e) => setFamilyMembers(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Guests</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <button
              type="button"
              class="btn btn-link"
              onClick={() => {
                axios
                  .post("https://centraltank.herokuapp.com/sendValues", {
                    FamilyMembers: familymembers,
                    Guests: guests,
                    PumpId: state.PumpId,
                  })
                  .then((res) => console.log(res));
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Threshold;
