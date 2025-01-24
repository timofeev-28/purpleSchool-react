export const INITIAL_STATE = {
    isValid: {
        userName: true,
    },
    value: {
        userName: ''
    },
    isFormReadyToSubmit: false
};

export function formReducer(state, action) {
    switch(action.type) {
        case 'SET_VALUE':
            return { ...state, value: { ...action.payload}};
        case 'CLEAR':
            return { ...state, value: INITIAL_STATE.value, isFormReadyToSubmit: false};
        case 'RESET_VALIDITY':
            return { ...state, isValid: INITIAL_STATE.isValid};
        case 'SUBMIT': {
            const userNameValidity = state.value?.userName?.trim().length;
            return {
                ...state,
                isValid: {
                    userName: userNameValidity,
                },
                isFormReadyToSubmit: userNameValidity
            }
        }
    }
}
