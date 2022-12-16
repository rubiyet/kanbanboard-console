import Card from "../components/card";
import List from "../components/list";
import Organize from "../components/organize/organize";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();

  const add = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { id: 3, uuid: "52f9df20-9393-4c4d-b72c-7bfa4398aeeee", title: search },
    ]);
    setSearch("");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="space-y-3">
        <div className="flex justify-center space-x-3">
          <input
            type="text"
            className="border-2 border-gray-300 text-gray-600 h-10 px-5 pr-16 rounded-md text-sm focus:outline-none"
            placeholder="Write your Task ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="border-2 w-20 border-gray-300 text-orange-600 font-semibold rounded-md"
            onClick={add}
          >
            ADD
          </button>
        </div>
        <Organize data={data} />
      </div>
    </div>
  );
}
