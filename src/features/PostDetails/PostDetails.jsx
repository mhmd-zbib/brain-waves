import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../core/components/ui/Cards";

export default function PostDetails() {
  const { postId } = useParams();

  return (
    <Card>
      <p className="text-2xl">Nameh here</p>

      {postId}
    </Card>
  );
}
