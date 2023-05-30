const INITIAL_STATE = {
  filterOpen: false,
  filterBrand: "",
  filterPriceMin: "",
  filterPriceMax: "",
  filterRating: 0,
  filterQuery: "",
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_FILTER_MENU":
      return {
        ...state,
        filterOpen: !state.filterOpen,
      };
    case "CHANGE_BRAND_FILTER":
      return {
        ...state,
        filterBrand: action.payload,
      };
    case "CHANGE_MIN_PRICE_FILTER":
      return {
        ...state,
        filterPriceMin: action.payload,
      };
    case "CHANGE_MAX_PRICE_FILTER":
      return {
        ...state,
        filterPriceMax: action.payload,
      };
    case "CHANGE_MIN_RATING_FILTER":
      return {
        ...state,
        filterRating: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
export { INITIAL_STATE };
