"use client";

import { useState } from "react";
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
import { X } from "lucide-react";

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
  const [excludeKeywords, setExcludeKeywords] = useState<string[]>([]);
  const [triggerKeywords, setTriggerKeywords] = useState<string[]>([]);
  const [newExcludeKeyword, setNewExcludeKeyword] = useState("");
  const [newTriggerKeyword, setNewTriggerKeyword] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [selectedReactions, setSelectedReactions] = useState<string[]>([]);

  const addKeyword = (keywordType: "exclude" | "trigger") => {
    const keyword =
      keywordType === "exclude" ? newExcludeKeyword : newTriggerKeyword;
    if (keyword.trim()) {
      if (keywordType === "exclude") {
        setExcludeKeywords([...excludeKeywords, keyword.trim()]);
        setNewExcludeKeyword("");
      } else {
        setTriggerKeywords([...triggerKeywords, keyword.trim()]);
        setNewTriggerKeyword("");
      }
    }
  };

  const removeKeyword = (keywordType: "exclude" | "trigger", index: number) => {
    if (keywordType === "exclude") {
      setExcludeKeywords(excludeKeywords.filter((_, i) => i !== index));
    } else {
      setTriggerKeywords(triggerKeywords.filter((_, i) => i !== index));
    }
  };

  const addReaction = (reaction: string) => {
    if (!selectedReactions.includes(reaction)) {
      setSelectedReactions([...selectedReactions, reaction]);
    }
  };

  const removeReaction = (reaction: string) => {
    setSelectedReactions(selectedReactions.filter((r) => r !== reaction));
  };

  return (
    <div className="w-full max-w-3xl space-y-6 p-6  rounded-lg shadow">
      <div className="flex items-center justify-between">
        <Label htmlFor="private-reply" className="text-base font-normal ">
          Enable To Privately Reply To First-Level Comments Only
        </Label>
        <Switch id="private-reply" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="once-per-post" className="text-base font-normal ">
          Send Message To The Same User Only Once Per Post
        </Label>
        <Switch id="once-per-post" />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Require a Post Reaction</h2>
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedReactions.map((reaction) => (
            <KeywordTag
              key={reaction}
              keyword={
                emojis.find((e) => e.name === reaction)?.emoji || reaction
              }
              onRemove={() => removeReaction(reaction)}
            />
          ))}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setShowEmojis(true)}
          onMouseLeave={() => setShowEmojis(false)}
        >
          {showEmojis && (
            <div className="absolute bottom-full left-0 mb-2 flex space-x-2 bg-white p-2 rounded-lg shadow-md">
              {emojis.map((emoji) => (
                <button
                  key={emoji.name}
                  onClick={() => addReaction(emoji.name)}
                  className="text-2xl hover:scale-110 transition-transform"
                  aria-label={`Add ${emoji.name} reaction`}
                >
                  {emoji.emoji}
                </button>
              ))}
            </div>
          )}
          <Button className="w-full">Require reaction</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Exclude Comments With These Keywords
        </h2>
        <div className="flex flex-wrap gap-2 mb-2">
          {excludeKeywords.map((keyword, index) => (
            <KeywordTag
              key={index}
              keyword={keyword}
              onRemove={() => removeKeyword("exclude", index)}
            />
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            placeholder="Specify Keywords"
            value={newExcludeKeyword}
            onChange={(e) => setNewExcludeKeyword(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={() => addKeyword("exclude")}>Add Keyword</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Only Trigger For Comments With These Keywords
        </h2>
        <div className="flex flex-wrap gap-2 mb-2">
          {triggerKeywords.map((keyword, index) => (
            <KeywordTag
              key={index}
              keyword={keyword}
              onRemove={() => removeKeyword("trigger", index)}
            />
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            placeholder="Specify Keywords"
            value={newTriggerKeyword}
            onChange={(e) => setNewTriggerKeyword(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={() => addKeyword("trigger")}>Add Keyword</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Private Reply After Post Engagement
        </h2>
        <div className="space-y-2">
          <Label htmlFor="message-type" className="text-base font-normal ">
            Select message type
          </Label>
          <Select>
            <SelectTrigger id="message-type" className="w-full">
              <SelectValue placeholder="Flow" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flow">Flow</SelectItem>
              <SelectItem value="single-message">Single message</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="select-flow" className="text-base font-normal ">
            Select flow
          </Label>
          <Select>
            <SelectTrigger id="select-flow" className="w-full">
              <SelectValue placeholder="Select a flow" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="welcome-message">Welcome message</SelectItem>
              <SelectItem value="default-reply">Default reply</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
