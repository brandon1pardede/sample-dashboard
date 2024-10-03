"use client";

import { X } from "lucide-react";
import { useState } from "react";

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
import { Separator } from "../ui/separator";

export function AutoResponse() {
  const [commentType, setCommentType] = useState("static");
  const [staticComments, setStaticComments] = useState(["a1", "a2"]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setStaticComments([...staticComments, newComment.trim()]);
      setNewComment("");
    }
  };

  const handleRemoveComment = (index: number) => {
    setStaticComments(staticComments.filter((_, i) => i !== index));
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
        <Switch id="auto-like" />
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-semibold">Reply In Comments</h2>
        <Separator />
        <div className="space-y-2">
          <Label htmlFor="comment-type" className="text-sm font-normal">
            Comment type
          </Label>
          <Select onValueChange={setCommentType} defaultValue={commentType}>
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
                <Input value={comment} readOnly className="flex-grow" />
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
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Type your comment here"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-grow"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setNewComment("")}
                className="text-gray-500 hover:text-red-500"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
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
