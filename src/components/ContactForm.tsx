"use client";

import React, { useState } from "react";
import { Form } from "./lib-components/io/Form";
import { createTodo } from "@/_actions/todoActions";
import { Text } from "@/components/lib-components/io/Text";
import { Button } from "./lib-components/io/Button";
import { useRouter } from "next/navigation";
import { stringify } from "querystring";

const ContactForm = () => {
  const [feedback, setFeedback] = useState<{
    message: string;
    status: "success" | "error";
  } | null>(null);

  const onSubmit = async (formValues: Record<string, any>, form: any) => {
    try {
      const res = await createTodo(formValues);
      if (res.success) {
        setFeedback({
          message: "Message send successfully!",
          status: "success",
        });
        form.reset();
        window.alert(JSON.stringify(formValues, null, 2));
      } else {
        setFeedback({ message: "Failed to send", status: "error" });
      }
    } catch (err) {
      console.error(err);

      setFeedback({
        message: "An error occurred while creating todo.",
        status: "error",
      });
    }
  };

  return (
    <>
      {feedback && (
        <div
          className={`mb-4 p-4 text-center text-white rounded ${
            feedback.status === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {feedback.message}
        </div>
      )}
      <Form
        onSubmit={onSubmit}
        render={({ submitting, pristine, form, values }) => (
          <div className="flex flex-col w-full gap-3">
            <Text
              name="fullname"
              label="Full Name"
              variant="outlined"
              className="w-full"
            />

            <Text
              name="email"
              label="Email"
              variant="outlined"
              className="w-full"
            />

            <Text
              name="description"
              label="Message"
              variant="outlined"
              className="w-full"
            />

            <Button
              type="submit"
              className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded"
            >
              Send a message
            </Button>
          </div>
        )}
      />
    </>
  );
};

export default ContactForm;
