import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMotion } from "../../../../redux/slices/motionSlice";
import axios from "axios";
import Swal from "sweetalert2";
const ControlMotion = () => {
 const  motionurl =import.meta.env.VITE_MOTIONGRAPHICS_URL
    const dispatch = useDispatch();
    const { motionData, motionLoading } = useSelector((state) => state.motionGraphics);
    const [formData, setFormData] = useState({ title: "", thumbnail: "", url: "" });
    const [editId, setEditId] = useState(null);
  
    useEffect(() => {
      dispatch(getMotion());
    }, [dispatch]);
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleAddOrEdit = async () => {
      if (!formData.title || !formData.thumbnail || !formData.url) {
        return Swal.fire("Error", "Please fill in all fields", "error");
      }
  
      try {
        if (editId) {
          await axios.put(`http://localhost:3000/videoEditing/${editId}`, formData);
          Swal.fire("Updated", "Video updated successfully", "success");
          setEditId(null);
        } else {
          await axios.post("http://localhost:3000/videoEditing", formData);
          Swal.fire("Added", "Video added successfully", "success");
        }
        setFormData({ title: "", thumbnail: "", url: "" });
        dispatch(getMotion());
      } catch (err) {
        Swal.fire("Error", err.message, "error");
      }
    };
  
    const handleEdit = (video) => {
      setFormData(video);
      setEditId(video.id);
    };
  
    const handleDelete = async (id) => {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (confirm.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/videoEditing/${id}`);
          dispatch(getMotion());
          Swal.fire("Deleted!", "Video has been deleted.", "success");
        } catch (err) {
          Swal.fire("Error", err.message, "error");
        }
      }
    };
  
    return (
      <div className="p-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Panel - Videos</h2>
  
        {/* Form */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleInputChange}
            placeholder="Thumbnail URL"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            placeholder="Video URL"
            className="p-2 border rounded"
          />
          <button
            onClick={handleAddOrEdit}
            className="sm:col-span-2 lg:col-span-1 bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
          >
            {editId ? "Update Video" : "Add Video"}
          </button>
        </div>
  
        {/* Table */}
        {motionLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Thumbnail</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(motionData) && motionData.map((video) => (
                  <tr key={video.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{video.id}</td>
                    <td className="p-3">{video.title}</td>
                    <td className="p-3">
                      <img src={video.thumbnail} alt={video.title} className="w-20 rounded" />
                    </td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={() => handleEdit(video)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(video.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
}

export default ControlMotion