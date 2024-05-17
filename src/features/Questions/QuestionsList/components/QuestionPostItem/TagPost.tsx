interface TagPostProps {
  tags: string[];
}

export default function TagPost({ tags }: TagPostProps) {
  return (
    <div className="flex flex-row gap-2">
      {tags.map((tag) => (
        <div className="bg-primary w-fit  px-2 rounded-full text-xs text-accent items-center flex font-medium">
          {tag}
        </div>
      ))}
    </div>
  );
}
