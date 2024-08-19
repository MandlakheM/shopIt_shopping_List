import React, { useEffect } from "react";
import { useState } from "react";
import "./body.css";
import Item from "../item/item";
import Button from "../floatingButton/button";
import AddModal from "../modals/addModal/addModal";
import { fetchShoppingList } from "../../redux/action";
import { connect } from "react-redux";

function Body(props) {
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(false);

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

  const toggleEditing = () => {
    setEditing(true);
    console.log("we are editing an item");
  };

  return props.shopItem.loading ? (
    <div>
      <h2>Loading</h2>
    </div>
  ) : props.shopItem.errormessage ? (
    <div>
      <h2> props.shopItem.errormessage</h2>
    </div>
  ) : (
    <main>
      <div className="catContainer">
        <div className="fruits">
          <span>FRUITS/VEGITABLES</span>
          <ul>
            {/* <li>
              <Item toggleEditing={toggleEditing} />
              <Item />
              <Item />
            </li> */}
            {props.shopItem.shoppinglist &&
              props.shopItem.shoppinglist.map((item) => (
                <li key={item.id}>
                  <p>item name: {item.itemName}</p>
                  <p>item description: {item.itemDescription}</p>
                  <p>item quantity: {item.itemQuantity}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="meat">
          <span>MEAT/POULTRY</span>
        </div>
        {/* <div className="grain">
          <span>GRAINS</span>
        </div>
        <div className="condiments">
          <span>CONDIMENTS/SAUCE</span>
        </div> */}
        <div className="cannedFood">
          <span>CANNED GOODS</span>
        </div>
        {/* <div className="dairy">
          <span>DAIRY/DELI</span>
        </div> */}
        <div className="toiletries">
          <span>TOILETRIES</span>
        </div>
        <div className="homeSupplies">
          <span>HOME SUPPLIES</span>
        </div>
        <div className="other">
          <span>OTHER</span>
        </div>
        <div className="addButton">
          <Button activateModal={activateModal} />
        </div>
        {modal && (
          <AddModal deactivateModal={deactivateModal} editing={editing} />
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
  };
};

export default connect(stateToProps, dispatchToProps)(Body);
