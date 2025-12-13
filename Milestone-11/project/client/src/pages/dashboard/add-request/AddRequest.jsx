import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";

const AddRequest = () => {
  const { user } = useContext(AuthContext);

  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  useEffect(() => {
    axios.get("/upazila.json").then((res) => {
      setUpazilas(res.data.upazilas);
    });

    axios.get("/district.json").then((res) => {
      setDistricts(res.data.districts);
    });
  }, []);

  const [formData, setFormData] = useState({
    requesterName: "",
    requesterEmail: "",
    recipientName: "",
    district: "",
    upazila: "",
    bloodGroup: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        requesterName: user.displayName || "",
        requesterEmail: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-xl my-4 mx-auto bg-white p-6 rounded shadow text-sky-900">
      <div className="my-auto w-full">
        <h2 className="text-2xl font-semibold mb-4">Add Donation Request</h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            name="requesterName"
            value={formData.requesterName}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />

          <input
            type="email"
            name="requesterEmail"
            value={formData.requesterEmail}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />

          <input
            type="text"
            name="recipientName"
            placeholder="Recipient Name"
            value={formData.recipientName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="" disabled>
              Choose Your District
            </option>

            {districts.map((district) => (
              <option key={district.id} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>

          <select
            name="upazila"
            value={formData.upazila}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="" disabled>
              Choose Your Upazila
            </option>

            {upazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.name}>
                {upazila.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
            className="w-full border p-2 rounded"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Add Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRequest;
