"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  addExcludeKeyword,
  addReaction,
  addTriggerKeyword,
  removeExcludeKeyword,
  removeReaction,
  removeTriggerKeyword,
  setEnablePrivateReply,
  setFlow,
  setMessage,
  setMessageType,
  setNewExcludeKeyword,
  setNewTriggerKeyword,
  setSendMessagePerUserOnce,
  setShowEmojis,
} from "@/lib/features/settings/settings-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Separator } from "../ui/separator";

const emojis = [
  { name: "like", emoji: "👍" },
  { name: "love", emoji: "❤️" },
  { name: "haha", emoji: "😆" },
  { name: "wow", emoji: "😮" },
  { name: "sad", emoji: "😢" },
  { name: "angry", emoji: "😠" },
];

interface KeywordTagProps {
  keyword: string;
  onRemove: () => void;
}

const KeywordTag = ({ keyword, onRemove }: KeywordTagProps) => (
  <div className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">
    {keyword}
    <button onClick={onRemove} className="ml-2 focus:outline-none">
      <X className="h-4 w-4" />
    </button>
  </div>
);

export function Settings() {
  const dispatch = useAppDispatch();
  const {
    excludeKeywords,
    triggerKeywords,
    newExcludeKeyword,
    newTriggerKeyword,
    showEmojis,
    selectedReactions,
    enablePrivateReply,
    sendMessagePerUserOncePerPost,
    flow,
    message,
    messageType,
  } = useAppSelector((s) => s.settings);

  return (
    <div className="w-full max-w-3xl space-y-6 p-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label
            htmlFor="private-reply"
            className="text-sm text-muted-foreground font-normal "
          >
            Enable To Privately Reply To First-Level Comments Only
          </Label>
          <Switch
            id="private-reply"
            checked={enablePrivateReply}
            onCheckedChange={(checked) => {
              dispatch(setEnablePrivateReply(checked));
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label
            htmlFor="once-per-post"
            className="text-sm text-muted-foreground font-normal "
          >
            Send Message To The Same User Only Once Per Post
          </Label>
          <Switch
            id="once-per-post"
            checked={sendMessagePerUserOncePerPost}
            onCheckedChange={(checked) => {
              dispatch(setSendMessagePerUserOnce(checked));
            }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-semibold">Require a Post Reaction</h2>
        <Separator />
        <div
          onMouseEnter={() => dispatch(setShowEmojis(true))}
          onMouseLeave={() => dispatch(setShowEmojis(false))}
        >
          {!!selectedReactions.length && (
            <div className={cn("flex flex-wrap gap-2")}>
              {selectedReactions.map((reaction) => (
                <KeywordTag
                  key={reaction}
                  keyword={
                    emojis.find((e) => e.name === reaction)?.emoji || reaction
                  }
                  onRemove={() => dispatch(removeReaction(reaction))}
                />
              ))}
            </div>
          )}
          <div
            className={cn(
              "h-2 transition-[height] flex justify-center gap-2",
              showEmojis && "h-16"
            )}
          >
            {emojis.map((emoji) => (
              <button
                key={emoji.name}
                onClick={() => dispatch(addReaction(emoji.name))}
                className={cn(
                  "text-4xl hover:scale-110 opacity-0 transition-opacity",
                  showEmojis && "opacity-100"
                )}
                aria-label={`Add ${emoji.name} reaction`}
              >
                {emoji.emoji}
              </button>
            ))}
          </div>
        </div>
        <Button className="w-full">Require reaction</Button>
      </div>

      <div>
        <h2 className="text-sm">Exclude Comments With These Keywords</h2>
        <div className="flex flex-wrap gap-2 my-2">
          {excludeKeywords.map((keyword, index) => (
            <KeywordTag
              key={index}
              keyword={keyword}
              onRemove={() => dispatch(removeExcludeKeyword(index))}
            />
          ))}
        </div>
        <div className="flex">
          <Input
            placeholder="Specify Keywords"
            value={newExcludeKeyword}
            onChange={(e) => dispatch(setNewExcludeKeyword(e.target.value))}
            className="flex-grow rounded-tr-none rounded-br-none border-r-0"
          />
          <Button
            onClick={() => dispatch(addExcludeKeyword())}
            className="rounded-bl-none rounded-tl-none"
          >
            Add Keyword
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-sm">
          Only Trigger For Comments With These Keywords
        </h2>
        <div className="flex flex-wrap gap-2 my-2">
          {triggerKeywords.map((keyword, index) => (
            <KeywordTag
              key={index}
              keyword={keyword}
              onRemove={() => dispatch(removeTriggerKeyword(index))}
            />
          ))}
        </div>
        <div className="flex">
          <Input
            placeholder="Specify Keywords"
            value={newTriggerKeyword}
            onChange={(e) => dispatch(setNewTriggerKeyword(e.target.value))}
            className="flex-grow rounded-tr-none rounded-br-none border-r-0"
          />
          <Button
            onClick={() => dispatch(addTriggerKeyword())}
            className="rounded-bl-none rounded-tl-none"
          >
            Add Keyword
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-semibold">
          Private Reply After Post Engagement
        </h2>
        <Separator />
        <div className="space-y-2">
          <div>
            <Label htmlFor="message-type" className=" font-normal ">
              Select message type
            </Label>
            <Select
              value={messageType || undefined}
              onValueChange={(value) => dispatch(setMessageType(value))}
            >
              <SelectTrigger id="message-type" className="w-full">
                <SelectValue placeholder="Choose message type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flow">Flow</SelectItem>
                <SelectItem value="single-message">Single message</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="select-flow" className="font-normal ">
              Select flow
            </Label>
            <Select
              value={flow || undefined}
              onValueChange={(value) => dispatch(setFlow(value))}
            >
              <SelectTrigger id="select-flow" className="w-full">
                <SelectValue placeholder="Select a flow" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="welcome-message">Welcome message</SelectItem>
                <SelectItem value="default-reply">Default reply</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {messageType === "single-message" && (
            <div>
              <Label htmlFor="select-message" className="font-normal ">
                Select message
              </Label>
              <Select
                value={message || undefined}
                onValueChange={(value) => dispatch(setMessage(value))}
              >
                <SelectTrigger id="select-message" className="w-full">
                  <SelectValue placeholder="Select message" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-card-1">Text Card #1</SelectItem>
                  <SelectItem value="text-card-2">Text Card #2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
