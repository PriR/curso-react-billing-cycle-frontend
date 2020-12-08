import { combineReducers } from 'react-redux';

const rootReducer = combineReducers({
  dashboard: () => ({ summary: { credit: 100, debt: 50 } }),
});

export default rootReducer;
