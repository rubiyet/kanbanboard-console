import Card from "../card";
import List from "../list";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

export default function Organize({data}) {

  const itemsNormal = {
    ToDo: [
      {
        id: 1,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "Lorem Ipsum is simply dummy",
      },
      {
        id: 2,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
        title: "Lorem Ipsum is simply dummy",
      },
      {
        id: 3,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
        title: "Lorem Ipsum is simply dummy",
      },
    ],

    InProgress: [
      {
        id: 5,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
        title: "Lorem Ipsum is simply dummy",
      },
      {
        id: 6,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a451",
        title: "Lorem Ipsum is simply dummy",
      },
    ],

    Done: [
    ],
  };

  const [items, setItems] = useState(itemsNormal);

  const removeFromList = (list, id) => {
    const newList = list.filter((item) => item.id !== id);
    return newList;
  };

  const addToList = (list, item) => {
    const newList = [...list, item];
    return newList;
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      return;
    }

    const sourceList = items[source.droppableId];
    const destinationList = items[destination.droppableId];

    const item = sourceList.find((item) => item.uuid === draggableId);

    const newSourceList = removeFromList(sourceList, item.id);
    const newDestinationList = addToList(destinationList, item);

    const newItems = {
      ...items,
      [source.droppableId]: newSourceList,
      [destination.droppableId]: newDestinationList,
    };

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-row gap-3">
        <List listTitle="To Do" onDragEnd={onDragEnd} name="ToDo" className="space-y-3">
              {items?.ToDo?.map((item, index) => (
                <Draggable key={item.uuid} draggableId={item.uuid} index={index} >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card taskTitle={item.title} />
                    </div>
                  )}
                </Draggable>
              ))}
        </List>
        <List listTitle="In Progress" onDragEnd={onDragEnd} name="InProgress">
              {items?.InProgress?.map((item, index) => (    
                <Draggable key={item.uuid} draggableId={item.uuid} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    > 
                      <Card taskTitle={item.title} />
                      </div>
                  )}
                </Draggable>
              ))}
        </List>
        <List listTitle="Done" onDragEnd={onDragEnd} name="Done">
              {items?.Done?.map((item, index) => (    
                <Draggable key={item.uuid} draggableId={item.uuid} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    > 
                      <Card taskTitle={item.title} />
                      </div>
                  )}
                </Draggable>
              ))}
        </List>
      </div>
    </DragDropContext>
  );
}