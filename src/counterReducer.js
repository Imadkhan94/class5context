const counterReducer = (state, action) => {
    switch (action) {
      case 'DECREMENT':
        return state - 1
      default:
    }
  }
  export default counterReducer;