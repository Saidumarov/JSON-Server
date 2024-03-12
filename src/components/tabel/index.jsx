import { useEffect, useState } from "react";
import Edit, { Delete } from "../../constants";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card1 from "../loading";
import axios from "axios";

function Tabel() {
  const navegate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios.get("http://localhost:3000/data").then((res) => {
      setData(res?.data);
    });
  };

  let id = localStorage.getItem("user") || [];
  useEffect(() => {
    fetchData();
  }, [id]);

  // delete
  const delet = (id) => {
    if (window.confirm("Delete User")) {
      const fetchDelete = async () => {
        await axios.delete(`http://localhost:3000/data/${id}`).then((res) => {
          setData(res?.data);
          fetchData();
        });
      };
      fetchDelete();
      toast.error("Delete User");
    }
  };

  return (
    <>
      <div className="container">
        <div className="users">
          <div className="user_cards">
            {data.length > 0 ? (
              data?.map((el, i) => (
                <div className="user_card" key={i}>
                  <p>
                    Name:<span> {el?.name} </span>
                  </p>
                  <p>
                    Last:<span> {el?.last} </span>
                  </p>
                  <p>
                    Email: <span> {el?.email} </span>
                  </p>
                  <p>
                    Address: <span> {el?.address} </span>
                  </p>
                  <p>
                    Phone: <span> {el?.phone} </span>
                  </p>
                  <p>
                    Website: <span> {el?.website} </span>
                  </p>
                  <p>
                    Company: <span> {el?.company} </span>
                  </p>
                  <div className="btns">
                    <button
                      className="edit"
                      onClick={() => navegate(`/edit/${el?.id}`)}
                    >
                      <Edit />
                    </button>
                    <button className="delete" onClick={() => delet(el?.id)}>
                      <Delete />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <>
                <Card1 />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabel;
