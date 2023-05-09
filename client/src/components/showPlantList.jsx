import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UpdatePlant } from "./updatePlant"; // added

function PlantCard({ data, handleEdit, handleDelete }) {
  const { _id, title, description } = data;

  return (
    <li key={_id}>
      <div className="title-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="button-container">
        <button className="button" name={_id} onClick={handleEdit}>
          edit
        </button>
        <button className="button" name={_id} onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
}

export function ShowPlantList() {
  const [plant, setPlant] = useState([]);
  const [open, setOpen] = useState(false); // added
  const [id, setId] = useState(""); // added
  const [update, setUpdate] = useState(false); // added

  useEffect(
    function () {
      axios
        .get("http://localhost:8000/api/plant")
        .then((res) => {
          console.log(res.data);
          setPlant(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    [update] // updated
  );

  function handleEdit(e) { // added
    setId(e.target.name);
    setOpen(true);
  }

  function handleUpdate() { // added
    console.log("update:", update, !update);
    setUpdate(!update);
  }

  function handleDelete(e) { // added
    axios.delete(`http://localhost:8000/api/plant/${e.target.name}`);

    setPlant((data) => {
      return data.filter((plant) => plant._id !== e.target.name);
    });
  }

  function handleClose() { // added
    setId("");
    setOpen(false);
  }

  return (
    <section className="container">
      <Link to="/create-plant" className="button-new">
        <button className="button">New</button>
      </Link>
      <section className="contents">
        <h1>Plant</h1>
        <ul className="list-container">
          {plant.map((data, id) => (
            <PlantCard
              key={id}
              data={data}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
      {open ? (
        <section className="update-container">
          <div className="update-contents">
            <p onClick={handleClose} className="close">
              &times;
            </p>

            <UpdatePlant
              _id={id}
              handleClose={handleClose}
              handleUpdate={handleUpdate}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </section>
  );
}
