"use client";

import { deleteEvent } from "@/actions/events";
import { truncateText } from "@/app/lib/truncateText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/use-fetch";
import { Link, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function EventCard({ event, username, isPublic = false }) {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  const text =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window?.location.origin}/${username}/${event.id}`
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const { loading, fn: fnDeleteEvent } = useFetch(deleteEvent);

  const handleDelete = async () => {
    if (window?.confirm("Are you sure you want to delete this event?")) {
      try {
        await fnDeleteEvent(event.id);
        toast.success("Event deleted");
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        router.refresh();
      }
    }
  };

  const handleCardClick = (e) => {
    if (e.target.tagName !== "BUTTON" && e.target.tagName !== "SVG") {
      window?.open(
        `${window?.location.origin}/${username}/${event.id}`,
        "_blank"
      );
    }
  };

  return (
    <Card
      className="flex flex-col justify-between cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader>
        <CardTitle className="text-2xl">{event.title}</CardTitle>
        <CardDescription className="flex justify-between">
          <span>
            {event.duration} mins | {event.isPrivate ? "Private" : "Public"}
          </span>
          <span>{event._count.bookings} Bookings</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{truncateText(event.description, 55)}.</p>
      </CardContent>
      {!isPublic && (
        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleCopy}
            className="flex items-center"
          >
            <Link className="mr-2 h-4 w-4" />
            {isCopied ? "Copied!" : "Copy Link"}
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
