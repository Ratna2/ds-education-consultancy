"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

/* ---------------- Schema ---------------- */

const enquirySchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  course: yup.string().required(),
  message: yup.string().optional(),
});

/* ---------------- Types ---------------- */

type EnquiryFormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
};

/* ---------------- Component ---------------- */

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: yupResolver(enquirySchema) as any, // ✅ THIS LINE FIXES EVERYTHING
  });

  const onSubmit = async (data: EnquiryFormData) => {
    try {
      setLoading(true);

      await addDoc(collection(db, "enquiries"), {
        ...data,
        status: "new",
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      reset();
    } catch (e) {
      console.error(e);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Enquiry Form
      </h2>

      {success && (
        <p className="text-green-600 text-center mb-4">
          ✅ Enquiry submitted successfully
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name")}
          placeholder="Your Name"
          className="w-full p-3 border rounded text-black"
        />

        <input
          {...register("email")}
          placeholder="Email Address"
          className="w-full p-3 border rounded text-black"
        />

        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="w-full p-3 border rounded text-black"
        />

        <input
          {...register("course")}
          placeholder="Course Interested In"
          className="w-full p-3 border rounded text-black"
        />

        <textarea
          {...register("message")}
          placeholder="Message (optional)"
          rows={4}
          className="w-full p-3 border rounded text-black"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}
