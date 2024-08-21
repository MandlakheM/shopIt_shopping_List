import React, { useEffect } from "react";
import { useState } from "react";
import "./body.css";
import Item from "../item/item";
import Button from "../floatingButton/button";
import AddModal from "../modals/addModal/addModal";
import { fetchShoppingList, removeShoppingItem } from "../../redux/action";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function Body(props) {
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState(null);

  useEffect(() => {
    props.loadShopItem();
  }, []);

  const activateModal = () => {
    setModal(true);
  };

  const deactivateModal = () => {
    setModal(false);
    setEditing(false);
  };

  const toggleEditing = (id) => {
    setEditing(true);
    setSelectedItemId(id); // Store the selected item ID
    // console.log("we are editing an item");
    // <AddModal />;
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this item? ")) {
      props.removeShopItem(id);
      props.loadShopItem();
      // toast.success("Item deleted");
    }
  };

  return props.shopItem.loading ? (
    <>
      <div className="l">
        {" "}
        <div className="loader"></div>
        <h2>Loading...</h2>
      </div>
    </>
  ) : props.shopItem.errormessage ? (
    <div>
      <h2> props.shopItem.errormessage</h2>
    </div>
  ) : (
    <main>
      <div className="catContainer">
        <div className="fruits">
          <span>FRUITS/VEGITABLES/DAIRY</span>
          {props.shopItem.shoppinglist &&
            props.shopItem.shoppinglist
              .filter((item) => item.itemCategory === "fruits/veg")
              .map((item) => (
                <Item
                  key={item.id}
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  itemQuantity={item.itemQuantity}
                  itemCategory={item.itemCategory}
                  toggleEditing={() => {
                    setEditing(true);
                    setSelectedItemId(item.id);
                    setSelectedItemData(item);
                  }}
                  itemId={item.id}
                />
              ))}
        </div>
        <div className="meat">
          <span>MEAT/POULTRY</span>
          {props.shopItem.shoppinglist &&
            props.shopItem.shoppinglist
              .filter((item) => item.itemCategory === "meat")
              .map((item) => (
                <Item
                  key={item.id}
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  itemQuantity={item.itemQuantity}
                  itemCategory={item.itemCategory}
                  toggleEditing={() => {
                    setEditing(true);
                    setSelectedItemId(item.id);
                    setSelectedItemData(item);
                  }}
                  itemId={item.id}
                />
              ))}
        </div>
        <div className="cannedFood">
          <span>DRINKS/CANNED GOODS</span>
          {props.shopItem.shoppinglist &&
            props.shopItem.shoppinglist
              .filter((item) => item.itemCategory === "canned goods")
              .map((item) => (
                <Item
                  key={item.id}
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  itemQuantity={item.itemQuantity}
                  itemCategory={item.itemCategory}
                  toggleEditing={() => {
                    setEditing(true);
                    setSelectedItemId(item.id);
                    setSelectedItemData(item);
                  }}
                  itemId={item.id}
                />
              ))}
        </div>
        <div className="toiletries">
          <span>TOILETRIES</span>
          {props.shopItem.shoppinglist &&
            props.shopItem.shoppinglist
              .filter((item) => item.itemCategory === "toiletries")
              .map((item) => (
                <Item
                  key={item.id}
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  itemQuantity={item.itemQuantity}
                  itemCategory={item.itemCategory}
                  toggleEditing={() => {
                    setEditing(true);
                    setSelectedItemId(item.id);
                    setSelectedItemData(item);
                  }}
                  itemId={item.id}
                />
              ))}
        </div>
        <div className="homeSupplies">
          <span>HOME SUPPLIES</span>
          {props.shopItem.shoppinglist &&
            props.shopItem.shoppinglist
              .filter((item) => item.itemCategory === "home supplies")
              .map((item) => (
                <Item
                  key={item.id}
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  itemQuantity={item.itemQuantity}
                  itemCategory={item.itemCategory}
                  toggleEditing={() => {
                    setEditing(true);
                    setSelectedItemId(item.id);
                    setSelectedItemData(item);
                  }}
                  itemId={item.id}
                />
              ))}
        </div>
        <div className="other">
          <span>OTHER</span>
          {props.shopItem.shoppinglist &&
            props.shopItem.shoppinglist
              .filter((item) => item.itemCategory === "other")
              .map((item) => (
                <Item
                  key={item.id}
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  itemQuantity={item.itemQuantity}
                  itemCategory={item.itemCategory}
                  toggleEditing={() => {
                    setEditing(true);
                    setSelectedItemId(item.id);
                    setSelectedItemData(item);
                  }}
                  itemId={item.id}
                />
              ))}
        </div>
        <div className="addButton">
          <Button activateModal={activateModal} />
        </div>
        {modal && (
          <AddModal deactivateModal={deactivateModal} editing={editing} />
        )}
        {editing && (
          <AddModal
            deactivateModal={deactivateModal}
            editing={editing}
            handleDelete={handleDelete}
            itemId={selectedItemId}
            initialData={selectedItemData}
          />
        )}
      </div>
    </main>
  );
}

const stateToProps = (state) => {
  return {
    shopItem: state.shopping,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    loadShopItem: () => dispatch(fetchShoppingList()),
    removeShopItem: (id) => dispatch(removeShoppingItem(id)),
  };
};

export default connect(stateToProps, dispatchToProps)(Body);
