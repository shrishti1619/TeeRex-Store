import { Button, Form } from "react-bootstrap";
import { CartState } from "../Component2/Context";


const Filters = () => {
  const {
    productDispatch,
    productState: { byWomen, byMen, byGreen, byRed, byBlue, byYellow, byPink, byPurple, byWhite, byBlack, byGrey, 
      byHoodie, byPolo, byBasic, byPrice1, byPrice2, byPrice3 },
  } = CartState();

  console.log(byGreen, byBlue,)
  // make state for rating

  return (
    <div className="filters" expand="lg">
      {/* <FaFilter className="filters"/> */}
      <span className="title"><strong>Filter Products</strong></span>
      <span><strong>GENDER</strong></span>
      <span>
        <Form.Check
          inline
          label="Women"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SHOW_WOMEN",
            })
          }
          checked={byWomen}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Men"
          name="group1"
          type="checkbox"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SHOW_MEN",
            })
          }
          checked={byMen}
        />
      </span>
      <span><strong>COLORS</strong></span>
      <span>
        <Form.Check
          inline
          label="Green"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "SHOW_GREEN",
            })
          }
          checked={byGreen}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Blue"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SHOW_BLUE",
            })
          }
          checked={byBlue}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Yellow"
          name="group1"
          type="checkbox"
          id={`inline-5`}
          onChange={() =>
            productDispatch({
              type: "SHOW_YELLOW",
            })
          }
          checked={byYellow}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Pink"
          name="group1"
          type="checkbox"
          id={`inline-6`}
          onChange={() =>
            productDispatch({
              type: "SHOW_PINK",
            })
          }
          checked={byPink}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Grey"
          name="group1"
          type="checkbox"
          id={`inline-7`}
          onChange={() =>
            productDispatch({
              type: "SHOW_GREY",
            })
          }
          checked={byGrey}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Red"
          name="group1"
          type="checkbox"
          id={`inline-8`}
          onChange={() =>
            productDispatch({
              type: "SHOW_RED",
            })
          }
          checked={byRed}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Purple"
          name="group1"
          type="checkbox"
          id={`inline-9`}
          onChange={() =>
            productDispatch({
              type: "SHOW_PURPLE",
            })
          }
          checked={byPurple}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="White"
          name="group1"
          type="checkbox"
          id={`inline-10`}
          onChange={() =>
            productDispatch({
              type: "SHOW_WHITE",
            })
          }
          checked={byWhite}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Black"
          name="group1"
          type="checkbox"
          id={`inline-11`}
          onChange={() =>
            productDispatch({
              type: "SHOW_BLACK",
            })
          }
          checked={byBlack}
        />
      </span>

      <span><strong>TYPE</strong></span>
      <span>
        <Form.Check
          inline
          label="Polo"
          name="group1"
          type="checkbox"
          id={`inline-12`}
          onChange={() =>
            productDispatch({
              type: "SHOW_POLO",
            })
          }
          checked={byPolo}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Hoodie"
          name="group1"
          type="checkbox"
          id={`inline-13`}
          onChange={() =>
            productDispatch({
              type: "SHOW_HOODIE",
            })
          }
          checked={byHoodie}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Basic"
          name="group1"
          type="checkbox"
          id={`inline-14`}
          onChange={() =>
            productDispatch({
              type: "SHOW_BASIC",
            })
          }
          checked={byBasic}
        />
      </span>


      <span><strong>PRICE RANGE</strong></span>
      <span>
        <Form.Check
          inline
          label="₹0-350"
          name="group1"
          type="checkbox"
          id={`inline-15`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_PRICE1",
            })
          }
          checked={byPrice1}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="₹350-500"
          name="group1"
          type="checkbox"
          id={`inline-16`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_PRICE2",
            })
          }
          checked={byPrice2}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="₹500-1000"
          name="group1"
          type="checkbox"
          id={`inline-17`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_PRICE3",
            })
          }
          checked={byPrice3}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        <strong>Clear Filters</strong>
        
      </Button>
    </div>
  );
};

export default Filters;