"use client";

import { X } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  addStaticComment,
  editStaticComment,
  removeStaticComment,
  setCommentType,
  setEnableAutoLikeComments,
} from "@/lib/features/auto-response/auto-response-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Separator } from "../ui/separator";

export function AutoResponse() {
  const dispatch = useAppDispatch();
  const { commentType, staticComments, enableAutoLikeComments } =
    useAppSelector((state) => state.autoResponse);

  const handleAddComment = () => {
    dispatch(addStaticComment());
  };

  const handleRemoveComment = (index: number) => {
    dispatch(removeStaticComment(index));
  };

  return (
    <div className="w-full max-w-3xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <Label
          htmlFor="auto-like"
          className="text-sm text-muted-foreground font-normal"
        >
          Enable To Automatically Like Comments
        </Label>
        <Switch
          id="auto-like"
          checked={enableAutoLikeComments}
          onCheckedChange={(value) =>
            dispatch(setEnableAutoLikeComments(value))
          }
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-semibold">Reply In Comments</h2>
        <Separator />
        <div className="space-y-2">
          <Label htmlFor="comment-type" className="text-sm font-normal">
            Comment type
          </Label>
          <Select
            onValueChange={(value) => dispatch(setCommentType(value))}
            value={commentType}
          >
            <SelectTrigger id="comment-type">
              <SelectValue placeholder="Select comment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="static">Static</SelectItem>
              <SelectItem value="openai">Open AI</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {commentType === "static" && (
          <div className="space-y-4">
            {staticComments.map((comment, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={comment}
                  placeholder="Type your comment here"
                  onChange={(e) =>
                    dispatch(
                      editStaticComment({ index, newComment: e.target.value })
                    )
                  }
                  className="flex-grow"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveComment(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button onClick={handleAddComment} className="w-full">
              Add Comment
            </Button>
          </div>
        )}

        {commentType === "openai" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="integration" className="text-sm font-normal">
                Select Integration
              </Label>
              <Select>
                <SelectTrigger id="integration">
                  <SelectValue placeholder="Integration 1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="integration1">Integration 1</SelectItem>
                  {/* Add more integration options as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="assistance" className="text-sm font-normal">
                Select Assistance
              </Label>
              <Select>
                <SelectTrigger id="assistance">
                  <SelectValue placeholder="Assistance 1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="assistance1">Assistance 1</SelectItem>
                  {/* Add more assistance options as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
