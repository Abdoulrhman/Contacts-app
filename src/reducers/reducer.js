import { contacts } from "../data.js";
const defaultState = {
  singleContact: {},
  contacts,
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      const newArray = state.contacts.map((v) => v);
      newArray.push(action.payload);
      return {
        ...state,
        contacts: newArray,
      };

    case "UPDATE_CONTACT":
      const index = state.contacts.findIndex(
        (v) => v?.id == action.payload?.id
      );
      const contact = state.contacts;
      contact[index] = action.payload;
      return {
        ...state,
        contacts: contact,
      };

    case "GET_SINLGE_CONTACT":
      const oneContact = state.contacts.filter(
        (v) => v.id == action.payload
      )[0];

      return {
        ...state,
        singleContact: oneContact,
      };

    case "DELETE_CONTACT":
      const updatedArray = state.contacts.filter((v) => v.id != action.payload);
      return {
        ...state,
        contacts: updatedArray,
      };

    default:
      return state;
  }
}

export default reducer;
