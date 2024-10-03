import { Button } from "../ui/button";
import { Input } from "../ui/input";

function PostIdUrl() {
  return (
    <div className="flex p-4">
      <Input
        placeholder="Post ID / URL"
        className="flex-grow border-r-0 rounded-tr-none rounded-br-none"
      />
      <Button className="rounded-bl-none rounded-tl-none">Grab post</Button>
    </div>
  );
}

export default PostIdUrl;
