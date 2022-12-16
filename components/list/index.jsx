import { Droppable } from "react-beautiful-dnd";

export default function List({ children, listTitle, name }) {
  return (
    <div className="">
      <div className="flex items-center justify-center bg-orange-600 h-10 font-semibold text-white">{listTitle}</div>
      <Droppable droppableId={name}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-[25rem] h-96 p-2 border-2"
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
