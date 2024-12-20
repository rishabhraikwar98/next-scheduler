"use client";

import { Button } from "@/components/ui/button";
import { cancelMeeting } from "@/actions/meetings";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import toast from "react-hot-toast";

export default function CancelMeetingButton({ meetingId }) {
  const router = useRouter();

  const { loading, error, fn: fnCancelMeeting } = useFetch(cancelMeeting);

  const handleCancel = async () => {
    if (window.confirm("Are you sure you want to cancel this meeting?")) {
      try {
        await fnCancelMeeting(meetingId);
        toast.success("Meeting canceled");
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      } finally {
        router.refresh();
      }
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <Button variant="destructive" onClick={handleCancel} disabled={loading}>
        {loading ? "Canceling..." : "Cancel Meeting"}
      </Button>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
}
