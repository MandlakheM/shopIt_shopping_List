import React, { useEffect, useState } from "react";
import "./addModal.css";
import { useDispatch } from "react-redux";
import { addShoppingItem, updateShoppingItem } from "../../../redux/action";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";


function AddModal({ deactivateModal, editing, handleDelete, itemId, initialData, load }) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();


  useEffect(() => {
    if (editing && initialData) {
      setItemName(initialData.itemName);
      setItemQuantity(initialData.itemQuantity);
      setItemDescription(initialData.itemDescription);
      setItemCategory(initialData.itemCategory);
    }
  }, [editing, initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const shoppingobj = {
      itemName,
      itemQuantity,
      itemDescription,
      itemCategory,
      userId,
    };

    if (editing) {
      dispatch(updateShoppingItem(itemId, shoppingobj));
    } else {
      dispatch(addShoppingItem(shoppingobj));
    }

    deactivateModal();
    load(userId)
    // navigate("/yourList");

  }

  return (
    <div>
      <div className="modal">
        <div className="overlay" onClick={deactivateModal}></div>
        <div className="modalContent">
          <form onSubmit={handleSubmit}>
            <div className="wrap-input-9">
              <input
                className="input"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                type="text"
                placeholder="Item Name"
              />
              <span className="focus-border"><i></i></span>
            </div>
            <div className="wrap-input-9">
              <input
                className="input"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                type="text"
                placeholder="Item Description"
              />
              <span className="focus-border"><i></i></span>
            </div>
            <div className="wrap-input-9">
              <input
                className="input"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                type="text"
                placeholder="Item Quantity"
              />
              <span className="focus-border"><i></i></span>
            </div>
            <select
              className="input"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            >
              <option value="item category">Item Category</option>
              <option value="fruits/veg">Fruits/Veg</option>
              <option value="meat">Meat</option>
              <option value="canned goods">Canned Goods</option>
              <option value="toiletries">Toiletries</option>
              <option value="home supplies">Home Supplies</option>
              <option value="other">Other</option>
            </select>

            {editing ? (
              <>
                <button type="submit">Edit Item</button>
                <button onClick={() => handleDelete(itemId)}>Delete</button>
              </>
            ) : (
              <button type="submit">Add Item</button>
            )}
            <div className="closeModal">
              <IoMdCloseCircle onClick={deactivateModal} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
