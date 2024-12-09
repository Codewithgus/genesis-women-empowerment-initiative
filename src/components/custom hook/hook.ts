import { FormEvent, useState } from "react";
import axios from "axios";
import { Toaster, toaster } from "../ui/toaster";
import { useNavigate } from "react-router-dom";

function myfunction() {
  const [formdata, setFormdata] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const data = new FormData();
  data.append("name", formdata.name);
  data.append("subject", formdata.subject);
  data.append("message", formdata.message);
  data.append("email", formdata.email);

  const apiurl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios
        .post(`${apiurl}/mail/send/`, data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          setTimeout(() => {
            navigate("/");
          }, 5000);
          toaster.create({
            title: " sent successfully ",
            duration: 5000,
            type: "success",
          });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);

          toaster.create({
            title: "failed to send ",
            duration: 5000,
            type: "error",
          });
          setLoading(false);
        });

      setFormdata({
        ...formdata,
        name: "",
        subject: "",
        message: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, handleSubmit, formdata, setFormdata, Toaster };
}

export default myfunction;
