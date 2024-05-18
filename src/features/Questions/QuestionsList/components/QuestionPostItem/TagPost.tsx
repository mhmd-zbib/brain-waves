interface TagPostProps {
  tags: string[];
}

export default function TagPost({ tags }: TagPostProps) {
  const maxTagsToShow = 3;
  const tagsToShow = tags.slice(0, maxTagsToShow);
  const remainingTagsCount = tags.length - maxTagsToShow;

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {tagsToShow.map((tag, index) => (
        <div
          key={index}
          className="bg-primary w-fit px-2 rounded-full text-xs text-accent items-center flex font-medium"
        >
          {tag}
        </div>
      ))}
      {remainingTagsCount > 0 && (
        <div className="bg-primary w-fit px-2 rounded-full text-xs text-accent items-center flex font-medium">
          +{remainingTagsCount}
        </div>
      )}
    </div>
  );
}
