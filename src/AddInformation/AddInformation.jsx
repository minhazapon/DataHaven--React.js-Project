import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const AddInformationForm = () => {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({ image: "", name: "", information: "" });
    const [search, setSearch] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("items")) || [];
        setItems(storedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        if (!formData.image || !formData.name || !formData.information) {
            alert("All fields are required!");
            return;
        }
        if (editIndex !== null) {
            const updatedItems = items.map((item, index) =>
                index === editIndex ? formData : item
            );
            setItems(updatedItems);
            setEditIndex(null);
        } else {
            setItems([...items, formData]);
        }
        setFormData({ image: "", name: "", information: "" });
        setIsModalOpen(false);
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(items[index]);
        setIsModalOpen(true);
    };

    const filteredItems = items.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.information.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Information</h1>
            <form onSubmit={handleAddItem} className="mb-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="image">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter image URL"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="information">
                        Information
                    </label>
                    <textarea
                        id="information"
                        name="information"
                        value={formData.information}
                        onChange={handleInputChange}
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter information"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-cyan-800 btn text-white px-4 py-2 rounded-lg hover:bg-cyan-800"
                >
                    {editIndex !== null ? "Update Item" : "Add Item"}
                </button>
            </form>

            <div className="mb-6">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border rounded-lg p-2"
                    placeholder="Search items..."
                />
            </div>

            <div className="grid gap-4">
                {filteredItems.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-4 shadow-md flex items-center gap-4 justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                <p className="text-sm text-gray-600">{item.information}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleEdit(index)}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                <FaEdit size={20} />
                            </button>
                            <button
                                onClick={() => handleDelete(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <FaTrash size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
                        <form onSubmit={handleAddItem}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="editImage">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    id="editImage"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="editName">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="editName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="editInformation">
                                    Information
                                </label>
                                <textarea
                                    id="editInformation"
                                    name="information"
                                    value={formData.information}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddInformationForm;
