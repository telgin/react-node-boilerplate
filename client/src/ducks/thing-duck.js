const DEFAULT_STATE = {
    data: 'init'
};

export const selectors = {
    getData: state => state.thing.data
};

const SET_DATA = 'thing/setData';

export const actions = {
    setData: (data) => ({
        data,
        type: SET_DATA
    })
};

export default (state = DEFAULT_STATE, action) => {
    if (action.type === SET_DATA) {
        return {
            ...state,
            data: action.data
        };
    }

    return state;
};