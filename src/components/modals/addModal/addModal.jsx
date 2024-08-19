import React, { useState } from "react";
import "./addModal.css";
import { useDispatch } from "react-redux";
import { addShoppingItem } from "../../../redux/action";

function addModal({ deactivateModal, editing }) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const shoppingobj = { itemName, itemQuantity, itemDescription, itemCategory };
    dispatch(addShoppingItem(shoppingobj))
    deactivateModal()
  }

  return (
    <div>
      <div className="modal">
        <div className="overlay" onClick={deactivateModal}></div>
        <div className="modalContent">
          <form onSubmit={handleSubmit}>
            <input
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="item name"
            />
            <input
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="item description"
            />
            <input
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="item quantity"
            />
            <select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              name=""
              id=""
            >
              <option value="item category">item category</option>
              <option value="fruits/veg">fruits/veg</option>
              <option value="meat">meat</option>
              <option value="canned goods">canned goods</option>
              <option value="toiletries">toiletries</option>
              <option value="home supplies">home supplies</option>
              <option value="other">other</option>
            </select>

            {editing ? (
              <>
                <button>done </button>
                <button>edit </button>
                <button>delete </button>
              </>
            ) : (
              <button type="submit">add item</button>
            )}
            {/* <button>add item</button>
          <button>done </button>
          <button>edit </button>
          <button>delete </button> */}
            <div className="closeModal">
              <button onClick={deactivateModal}>close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default addModal;
