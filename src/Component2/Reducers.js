export const cartReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    
    // case "INCREASE_CART_BY_ONE":
    //   return {
    //     ...state,
    //     cart: state.cart.filter(c=>c.id===action.payload.id ? (c.qty += 1) : 1),
    //   }

    // case "DECREASE_QUANTITY_BY_ONE":
    //   return {
    //     ...state,
        
    //   }

    case "CHANGE_CART_QTY":
      return {...state, cart:state.cart.filter(c=>c.id===action.payload.id ? (c.qty = action.payload.qty) : c.quantity)}
  }
};

export const productReducer = (state, action) => {
  switch (action.type){
    case 'SHOW_WOMEN':
      return {...state, byWomen: !state.byWomen}

    case 'SHOW_MEN':
      return {...state, byMen: !state.byMen}

    case 'SHOW_GREEN':
      return {...state, byGreen: !state.byGreen} 

    case 'SHOW_BLUE':
      return {...state, byBlue: !state.byBlue}
  
    case 'SHOW_PINK':
      return {...state, byPink: !state.byPink}
  
    case 'SHOW_YELLOW':
      return {...state, byYellow: !state.byYellow}
      
    case 'SHOW_RED':
      return {...state, byRed: !state.byRed}

    case 'SHOW_PURPLE':
      return {...state, byPurple: !state.byPurple} 
  
    case 'SHOW_WHITE':
      return {...state, byWhite: !state.byWhite}

    case 'SHOW_BLACK':
      return {...state, byBlack: !state.byBlack}
    
    case 'SHOW_GREY':
      return {...state, byGrey: !state.byGrey}
    
    case 'SHOW_HOODIE':
      return {...state, byHoodie: !state.byHoodie}
        
    case 'SHOW_POLO':
      return {...state, byPolo: !state.byPolo}
    
    case 'SHOW_BASIC':
      return {...state, byBasic: !state.byBasic}

    case 'FILTER_BY_SEARCH':
      return {...state, searchQuery: action.payload}
    
    case 'FILTER_BY_PRICE1':
      return {...state, byPrice1: !state.byPrice1}
    
    case 'FILTER_BY_PRICE2':
      return {...state, byPrice2: !state.byPrice2}

    case 'FILTER_BY_PRICE3':
      return {...state, byPrice3: !state.byPrice3}
    
    case "CLEAR_FILTERS":
      return {
        byWomen: false,
        byMen: false,
        byGreen: false,
        byBlue: false,
        byPink: false,
        byGrey: false,
        byPurple: false,
        byBlack: false,
        byWhite: false,
        byYellow: false,
        byRed: false,
        byPolo: false,
        byHoodie: false,
        byBasic: false,
        byPrice1: false,
        byPrice2: false,
        byPrice3: false,
        searchQuery: "",
      };
    
      default:
        return state;
  }
}