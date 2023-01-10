import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../assets/css/table.css";
import "../../assets/css/column.css";

export default function ColumnModule() {
  //sending value by dispatch to redux
  const dispatch = useDispatch();

  const [select, setSelect] = useState(false);

  const [allData, setAllData] = useState({ name: "", date: "", age: "" });

  const handleChange = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };

  function onAdd(e) {
    e.preventDefault();
    let updatedValue = [...storeData];
    if (!allData.name) {
      alert("enter the name");
    } else if (!allData.date) {
      alert("enter the date");
    } else if (!allData.age) {
      alert("enter the age");
    } else {
      updatedValue.push({
        name: allData.name,
        date: allData.date,
        age: allData.age,
      });
      console.log(updatedValue, "vanthudumame");
      navigate("/table ");
      dispatch({ type: "store", payload: updatedValue });
      setSelect(false);
    }
  }
  // getting value from redux by useselector
  const storeData = useSelector((store) => store.tableData);
  console.log(storeData, "tabledata");

  let navigate = useNavigate();

  return (
    <div clas="container border p-5   ">
      <div className="overall">
        <div>
          <div className="container column text-center  ">
            <h1>Column Module</h1>
            <table className="table container w-75">
              <thead className="bg-dark text-light text-light">
                <tr>
                  <th>Name</th>
                  <th>Details</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      name="name"
                      placeholder="name"
                      value={allData.name}
                      type="text"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <div class="dropdown">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle bg-light text-dark"
                        data-bs-toggle="dropdown"
                      >
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Date Of Birth :
                            <input
                              name="date"
                              value={allData.date}
                              type="date"
                              onChange={handleChange}
                            />
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Age :
                            <input
                              name="age"
                              value={allData.age}
                              placeholder="age"
                              onChange={handleChange}
                              type="number"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <button className=" border-secondary " onClick={onAdd}>
                      submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
