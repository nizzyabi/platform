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
import { ArrowRight, Grip, PencilRuler } from "lucide-react";
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
                      "flex items-center gap-x-2 border rounded mb-4 text-sm bg-primary text-baseContent",
                      chapter.isPublished && "bg-primary/30 border-primary/20 text-baseContent"
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className={cn(
                        "px-2 py-3 text-secondary border-r border-r-primary/20 rounded-l transition",
                        chapter.isPublished && "border-r-primary/20"
                      )}
                      {...provided.dragHandleProps}
                    >
                      <Grip
                        className="h-5 w-5 text-baseContent"
                      />
                    </div>
                    {chapter.title}
                    <div className="ml-auto pr-2 flex items-center gap-x-2">
                      {chapter.isFree && (
                        <Badge className="bg-primary text-white">
                          Free
                        </Badge>
                      )}
                      <Badge
                        className={cn(
                          "bg-primary text-white",
                          chapter.isPublished && "bg-primary"
                        )}
                      >
                        {chapter.isPublished ? "posted" : "draft"}
                      </Badge>
                      <ArrowRight
                        onClick={() => onEdit(chapter.id)}
                        className="cursor-pointer text-primary/70 h-4 w-4"
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