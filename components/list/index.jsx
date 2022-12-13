import { Droppable } from "react-beautiful-dnd";

export default function List({ listTitle }) {
  return (
    <div>
      <span>{listTitle}</span>
      <Droppable droppableId={listTitle}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-96 h-96 p-2 border-2"
          >
            {listTitle}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
