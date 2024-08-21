import React, { useEffect } from "react";
import { useState } from "react";
import "./body.css";
import Item from "../item/item";
import Button from "../floatingButton/button";
import AddModal from "../modals/addModal/addModal";
import { fetchShoppingList, removeShoppingItem } from "../../redux/action";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Search from "../searcch/search";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

function Body(props) {
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      props.loadShopItem(userId);
    }
  }, []);

  useEffect(() => {
    if (props.shopItem.shoppinglist && props.shopItem.shoppinglist.length > 0) {
      localStorage.setItem(
        "Item list",
        JSON.stringify(props.shopItem.shoppinglist)
      );
      navigate("/yourList");
    }
  }, [props.shopItem.shoppinglist]);

  const activateModal = () => {
    setModal(true);
  };

  const deactivateModal = () => {
    setModal(false);
    setEditing(false);
  };

  const toggleEditing = (id) => {
    setEditing(true);
    setSelectedItemId(id);
    // console.log("we are editing an item");
    // <AddModal />;
  };

  const handleDelete = (id) => {
    const userId = localStorage.getItem("userId");
    if (window.confirm("Do you want to delete this item? ")) {
      props.removeShopItem(id);
      props.loadShopItem(userId);
      // toast.success("Item deleted");
      navigate("/yourList");
    }
  };

  return (
    <main>
      <Header />
      {!localStorage.getItem("userId") ? (
        <div className="login-prompt">
          <h2>Please sign in to view your shopping list</h2>
        </div>
      ) : props.shopItem.loading ? (
        <div className="l">
          <div className="loader"></div>
          <h2>Loading...</h2>
        </div>
      ) : props.shopItem.errormessage ? (
        <div>
          <h2>{props.shopItem.errormessage}</h2>
        </div>
      ) : (
        <>
          <Search onSearch={setFilteredItems} />
          <div className="catContainer">
            <div className="fruits">
              <span>FRUITS/VEGITABLES/DAIRY</span>
              <p id="nodata">NO DATA TO DISPLAY</p>
              {filteredItems
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
              <p id="nodata">NO DATA TO DISPLAY</p>

              {filteredItems
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
              <p id="nodata">NO DATA TO DISPLAY</p>

              {filteredItems
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
              <p id="nodata">NO DATA TO DISPLAY</p>

              {filteredItems
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
              <p id="nodata">NO DATA TO DISPLAY</p>

              {filteredItems
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
              <p id="nodata">NO DATA TO DISPLAY</p>

              {filteredItems
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
              <AddModal
                deactivateModal={deactivateModal}
                editing={editing}
                load={props.loadShopItem}
              />
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
        </>
      )}
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
    loadShopItem: (userId) => dispatch(fetchShoppingList(userId)),
    removeShopItem: (id) => dispatch(removeShoppingItem(id)),
  };
};

export default connect(stateToProps, dispatchToProps)(Body);
