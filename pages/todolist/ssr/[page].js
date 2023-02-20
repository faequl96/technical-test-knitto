import {
  getTodoList,
  getRunningQueriesThunk,
} from "../../../lib/todolistApi";

import { wrapper } from "../../../lib/store";
import TodoList from "../[page]";

export default TodoList;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const page = context.params?.page;
    if (typeof page === "string") {
      store.dispatch(getTodoList.initiate(page));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
