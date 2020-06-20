import pagination from "./reducers/pagination.reducer";
import { rootReducer as reducerUsers } from "./reducers/users";
import { rootReducer as reducerMe } from "./reducers/me.resource";

export default {
  reducerMe,
  reducerUsers,
  pagination,
};
