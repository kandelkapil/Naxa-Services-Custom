export const Get_Data = "Get_Data";
const Set_Data = "Set_Data";

export const getData = () => ({
  type: Get_Data,
});

export const setData = (data) => ({
  type: Set_Data,
  data,
});

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Set_Data:
      const { data } = action;
      return { ...state, data };
    default:
      return state;
  }
};
