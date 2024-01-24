"use client";
// This page will display the list of chapters in the creation of the chapters
import { Chapter } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Grip, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// interface will have an item, edit, and reorder prop
interface ChaptersListProps {
  items: Chapter[];
  onReorder: (updateData: { id: string; position: number }[]) => void;
  onEdit: (id: string) => void;
};

export const ChaptersList = ({
  items,
  onReorder,
  onEdit
}: ChaptersListProps) => {
  // States
  const [isMounted, setIsMounted] = useState(false);
  const [chapters, setChapters] = useState(items);

  // UseEffect features
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setChapters(items);
  }, [items]);

  // When dragged, change
  const onDragEnd = (result: DropResult) => {
    
    if (!result.destination) return;
    // get array from items of chapters
    const items = Array.from(chapters);

    // splice
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Start & ending index
    const startIndex = Math.min(result.source.index, result.destination.index);
    const endIndex = Math.max(result.source.index, result.destination.index);

    // updated chapters 
    const updatedChapters = items.slice(startIndex, endIndex + 1);

    // state change
    setChapters(items);

    // Update data
    const bulkUpdateData = updatedChapters.map((chapter) => ({
      id: chapter.id,
      position: items.findIndex((item) => item.id === chapter.id)
    }));

    // when changed, change data
    onReorder(bulkUpdateData);
  }

  if (!isMounted) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="chapters">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {chapters.map((chapter, index) => (
              <Draggable 
                key={chapter.id} 
                draggableId={chapter.id} 
                index={index}
              >
                {(provided) => (
                  <div
                    className={cn(
                      "flex items-center gap-x-2 border rounded mb-4 text-sm bg-[#2c2c2c]",
                      chapter.isPublished && "bg-sky-100 border-sky-200 text-sky-700"
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className={cn(
                        "px-2 py-3 border-r border-r-slate-200 hover:bg-slate-300 rounded-l-md transition",
                        chapter.isPublished && "border-r-sky-200 hover:bg-sky-200"
                      )}
                      {...provided.dragHandleProps}
                    >
                      <Grip
                        className="h-5 w-5"
                      />
                    </div>
                    {chapter.title}
                    <div className="ml-auto pr-2 flex items-center gap-x-2">
                      {chapter.isFree && (
                        <Badge>
                          Free
                        </Badge>
                      )}
                      <Badge
                        className={cn(
                          "bg-gradient-to-r from-yellow-500 to-orange-500",
                          chapter.isPublished && "bg-gradient-to-r from-blue-500 to-blue-800"
                        )}
                      >
                        {chapter.isPublished ? "Posted" : "Draft"}
                      </Badge>
                      <Pencil
                        onClick={() => onEdit(chapter.id)}
                        className="w-4 h-4 cursor-pointer hover:opacity-75 transition"
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}