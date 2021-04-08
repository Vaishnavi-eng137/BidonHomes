const initialState = {
  isUserLoggedIn: false,
  loggedInUserIndex: null,
  users: [
    {
      name: "Vaishnavi",
      email: "vaisuch@gmail.com",
      password: "12345",
    },
    {
      name: "Shalu",
      email: "shalu@gmail.com",
      password: "67890",
    },
  ],
  products: [
    {
      name: "Screw Driver",
      description: "Visko Tools 101 Screwdriver Kit ",
      price: 200,
      quantity: 44,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81SCxojVGnL._SX355_.jpg",
    },
    {
      name: "Face Mask",
      description: " Washable & Reusable Cotton Masks for Adult",
      price: 400,
      quantity: 5,
      image: "https://t.ly/XYj9",
    },
  ],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      let tempProduct = [...state.products];
      tempProduct.push(action.payload);
      return { ...state, products: tempProduct };
    case "LOGIN_USER":
      return {
        ...state,
        isUserLoggedIn: true,
        loggedInUserIndex: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isUserLoggedIn: false,
        loggedInUserIndex: null,
      };
    case "RESET_DATA":
      return {
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default appReducer;
