import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { getShowreelLink } from "../../../../redux/slices/showReelSlice";

const ControlMyShowreel = () => {
  const dispatch = useDispatch();
  const { showreelLink, showreelLoading } = useSelector((state) => state.myShowreel);

  const [url, setUrl] = useState("");

  const showreelURL = import.meta.env.VITE_SHOWREEL_URL;

  useEffect(() => {
    dispatch(getShowreelLink());
  }, [dispatch]);

  useEffect(() => {
    if (showreelLink?.url) {
      setUrl(showreelLink.url);
    }
  }, [showreelLink]);

  const handleUpdate = async () => {
    if (!url) {
      return Swal.fire("Error", "Please enter the video URL", "error");
    }

    try {
      await axios.put(`${showreelURL}/${showreelLink.id}`, { url });
      Swal.fire("Updated", "Showreel URL updated successfully", "success");
      dispatch(getShowreelLink());
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit Showreel URL</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Video URL"
          className="p-2 border rounded flex-1"
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
        >
          Update URL
        </button>
      </div>

      {showreelLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : showreelLink ? (
        <div className="bg-white border rounded shadow p-4">
          <p className="font-semibold mb-2">Current Showreel URL:</p>
          <code className="block break-words text-blue-700">{showreelLink.url}</code>
        </div>
      ) : (
        <p className="text-center text-gray-500">No showreel available</p>
      )}
    </div>
  );
};

export default ControlMyShowreel;
