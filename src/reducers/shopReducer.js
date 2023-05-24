const INITIAL_STATE = {
  initialItems: [],
  items: [],
  loading: false,
  currentPage: 1,
  filter: "",
  orderSelectedOption: "recommended",
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        initialItems: [...action.payload],
        items: action.payload,
      };
    case "CHANGE_FILTER":
      return {
        ...state,
        filter: action.payload,
        currentPage: 1,
      };
    case "CHANGE_ORDER":
      return {
        ...state,
        orderSelectedOption: action.payload,
      };
    case "LOAD_ORDER_RECOMMENDED":
      return {
        ...state,
        items: [...state.initialItems],
        currentPage: 1,
      };
    case "LOAD_ORDER_ALPHABETICAL":
      return {
        ...state,
        items: state.items.sort((a, b) =>
          a.name.replace(/\s/g, "").localeCompare(b.name.replace(/\s/g, ""))
        ),
        currentPage: 1,
      };
    case "LOAD_ORDER_PRICE_DESCENDING":
      return {
        ...state,
        items: state.items.sort((a, b) => b.price - a.price),
        currentPage: 1,
      };
    case "LOAD_ORDER_PRICE_ASCENDING":
      return {
        ...state,
        items: state.items.sort((a, b) => a.price - b.price),
        currentPage: 1,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
export { INITIAL_STATE };
