import { useUpdateMessageMutation } from "@/redux/services/api";
import React from "react";
import { toast } from "react-toastify";

type propsType = {
  message: {};
  onMessageUpdate: (id: string) => void;
};

const ContactCard = ({ message, onMessageUpdate }: propsType) => {
  const [updateMessage] = useUpdateMessageMutation();

  const handleUpdateMessage = async () => {
    await toast.promise(
      updateMessage(message._id)
        .unwrap()
        .then(() => {
          onMessageUpdate(message._id);
        }),
      {
        error: "could not update",
        pending: "trying to update",
        success: "updated successfully",
      }
    );
  };

  return (
    <div className="block text-lg max-w-sm p-6 text-fourth bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      {Object.keys(message).map((key) => {
        if (
          key !== "IsSeen" &&
          key !== "__v" &&
          key !== "_id" &&
          key !== "updatedAt" &&
          key !== "createdAt"
        )
          return (
            <h5 key={key} className="mb-2 font-bold tracking-tight">
              <span className="text-primary">{key}</span> {" : " + message[key]}
            </h5>
          );
      })}
      <button
        onClick={handleUpdateMessage}
        className="px-6 py-2 mx-2 my-2 hover:bg-white transition duration-300 hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg"
      >
        {message.IsSeen ? "unSeen" : "Seen"}
      </button>
    </div>
  );
};

export default ContactCard;
