import { useGetTodoListQuery } from "../../lib/todolistApi";
import { useRouter } from "next/dist/client/router";
import ReactPaginate from "react-paginate";
import Link from "next/link";

export default function TodoList() {
  const router = useRouter();
  const pages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const page = router.query.page;
  const result = useGetTodoListQuery(page);

  return (
    <>
      <div className="relative max-w-6xl mx-auto mt-10">
        <div className="absolute font-bold text-xl text-red-600"><Link href={`/`}>Home</Link></div>
        <h1 className="text-center font-black text-3xl mb-8 mt-10">
          KnitToDo SSR
        </h1>
      </div>

      <div className="max-w-6xl bg-slate-200 p-8 mx-auto mt-10 rounded-xl">
        {result.data.map((todo) => (
          <div key={todo.id} className="bg-white w-full p-5 mt-4">
            <p>{todo.title}</p>
          </div>
        ))}
      </div>
      <div className="max-w-6xl bg-slate-200 px-8 py-4 mx-auto mt-4 mb-10 rounded-xl">
        <ul className="text-center text-xl font-semibold">
          {pages.map((paginate) =>
            `${paginate}` === page ? (
              <li
                key={paginate}
                className="inline-block mr-2 bg-slate-50 w-8 rounded p-1 text-slate-700"
              >
                <Link href={`/todolist/ssr/${paginate}`}>{`${paginate}`}</Link>
              </li>
            ) : (
              <li
                key={paginate}
                className="inline-block mr-2 bg-slate-700 w-8 rounded p-1 text-slate-50"
              >
                <Link href={`/todolist/ssr/${paginate}`}>{`${paginate}`}</Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
