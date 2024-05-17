interface TagPostProps {
  tags: string[];
}

export default function TagPost({ tags }: TagPostProps) {
  return (
    <div className="flex flex-row gap-4">
      {tags.map((tag) => (
        <div className="bg-primary w-fit px-3 rounded-full text-sm text-accent">
          {tag}
        </div>
      ))}
    </div>
  );
}
