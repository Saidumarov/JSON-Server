import { createContext, useEffect, useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Edit() {
  const navegate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:3000/data/${id}`).then((res) => {
        setUser(res?.data);
      });
    };
    fetchData();
  }, []);

  const { name, last, address, company, phone, website, email } = user;

  const disabled =
    !name || !last || !address || !phone || !website || !email || !company;

  const editAdd = () => {
    const fetchData = async () => {
      await axios.put(`http://localhost:3000/data/${id}`, user);
    };
    fetchData();
    navegate("/");
    toast.success("Edit User");
  };
  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="add">
          <div className="form">
            <label htmlFor="name">Firstname</label>
            <input
              type="name"
              placeholder="Firstname"
              id="name"
              value={name}
              onChange={handelChange}
            />
          </div>
          <div className="form">
            <label htmlFor="last">Lastname</label>
            <input
              type="username"
              placeholder="Lastname"
              id="last"
              value={last}
              onChange={handelChange}
            />
          </div>
          <div className="form">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              placeholder="+998-88-765-07-14"
              id="phone"
              onChange={handelChange}
              value={phone}
            />
          </div>
          <div className="form">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              placeholder="website"
              id="website"
              onChange={handelChange}
              value={website}
            />
          </div>
          <div className="form">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="Company"
              id="company"
              onChange={handelChange}
              value={company}
            />
          </div>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handelChange}
              value={email}
            />
          </div>
          <div className="form">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Address"
              id="address"
              value={address}
              onChange={handelChange}
            />
          </div>
        </div>
        <button className="save" onClick={editAdd} disabled={disabled}>
          Update
        </button>
        <button className="close" onClick={() => navegate("/")}>
          Close
        </button>
      </div>
    </>
  );
}

export default Edit;
