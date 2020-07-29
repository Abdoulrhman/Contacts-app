import { act } from "react-dom/test-utils";

const defaultState = {
  singleContact: {},
  contacts: [
    {
      "id": 12,
      "name": "abdoul",
      "phone": "011545484544",
      "email": "test@test.com"
    },
    {
      "id": 13,
      "name": "Karen",
      "phone": "1215415121",
      "email": "test@test.com"
    }, {
      "id": 14,
      "name": "Karen",
      "phone": "265462564531454",
      "email": "test@test.com"
    },
    , {
      "id": 15,
      "name": "Nader ",
      "phone": "265462564531454",
      "email": "test@test.com"
    }, , {
      "id": 16,
      "name": "Nada Isgrigg",
      "phone": "265462564531454",
      "email": "test@test.com"
    }, , {
      "id": 17,
      "name": "Nehal",
      "phone": "265462564531454",
      "email": "test@test.com"
    }, , {
      "id": 18,
      "name": "AShraf ",
      "phone": "265462564531454",
      "email": "test@test.com"
    }, , {
      "id": 19,
      "name": "Karim",
      "phone": "265462564531454",
      "email": "test@test.com"
    }, , {
      "id": 20,
      "name": "Loay ",
      "phone": "265462564531454",
      "email": "test@test.com"
    },
    , {
      "id": 21,
      "name": "Catty ",
      "phone": "265462564531454",
      "email": "test@test.com"
    },
    , {
      "id": 23,
      "name": "FAtten ",
      "phone": "265462564531454",
      "email": "test@test.com"
    },
    , {
      "id": 22,
      "name": "Toto ",
      "phone": "265462564531454",
      "email": "test@test.com"
    },
  ]

}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      const newArray = state.contacts.map(v => v);
      newArray.push(action.payload)
      return {
        ...state,
        contacts: newArray
      }

    case "UPDATE_CONTACT":
      const index = state.contacts.findIndex(v => v.id == action.payload.id);
      const contact = state.contacts;
      contact[index] = action.payload
      return {
        ...state,
        contacts: contact
      }

    case "GET_SINLGE_CONTACT":
      const oneContact = state.contacts.filter(v => v.id == action.payload)[0];

      return {
        ...state,
        singleContact: oneContact
      }

    case "DELETE_CONTACT":

      const updatedArray = state.contacts.filter(v => v.id != action.payload);
      return {
        ...state,
        contacts: updatedArray
      }


    default: return state;
  }
}

export default reducer;