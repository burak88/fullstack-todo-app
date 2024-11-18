"use client";

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import classNames from "classnames";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Tasks } from "@/app/constants/task";
import { KanbanCard } from "../kanbanCard";
import { Divider } from "../divider";

function KanbanBoard() {
  const taskStatus = {
    todo: {
      name: "TODO",
      items: Tasks,
      color: "#1E293B",
    },
    inWork: {
      name: "IN Work",
      items: [],
      color: "#306BFF",
    },
    qa: {
      name: "QA",
      items: [],
      color: "#FFB580",
    },
    completed: {
      name: "COMPLETED",
      items: [],
      color: "#78C552",
    },
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  const [columns, setColumns] = useState(taskStatus);

  return (
    <div className="flex justify-center items-start h-full w-full ">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className="flex flex-col m-8 " key={columnId}>
              <div className="flex items-center h-[50px]">
                <p className="font-bold text-sm">{column.name}</p>
                <div className="border-[#E2E8F0] border-1 text-[#94A3B8] w-8 h-6 rounded-full flex items-center justify-center ml-3">
                  {column.items.length}
                </div>
                <button className="ml-auto">
                  <HiOutlineDotsHorizontal size={20} color="#94A3B8" />
                </button>
              </div>
              <Divider
                className="border-[1.5px] mb-8 rounded-[50px]"
                style={{ borderColor: column.color }}
              />
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={classNames(
                        "p-1 max-h-min min-h-screen w-[258px] ",
                        {
                          "bg-white": !snapshot.isDraggingOver,
                          "bg-gray-100": snapshot.isDraggingOver,
                        }
                      )}
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <KanbanCard
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: "none",
                                    ...provided.draggableProps.style,
                                  }}
                                  key={item.title}
                                  title={item.title}
                                  description={item.description}
                                  label={item.label}
                                />
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default KanbanBoard;
