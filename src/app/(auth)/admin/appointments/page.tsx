"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminAppointmentsPage() {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "appointments"));
      setData(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    load();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await updateDoc(doc(db, "appointments", id), { status });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete appointment?")) return;
    await deleteDoc(doc(db, "appointments", id));
    setData(d => d.filter(x => x.id !== id));
  };

  const filtered = data.filter(a =>
    `${a.firstName} ${a.phone}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📅 Appointments</h1>

      <input
        placeholder="Search name / phone"
        className="mb-4 px-4 py-2 rounded bg-slate-800"
        onChange={e => setSearch(e.target.value)}
      />

      <table className="w-full bg-slate-900 rounded-lg">
        <thead className="bg-slate-800">
          <tr>
            <th className="p-3">Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(a => (
            <tr key={a.id} className="border-t border-slate-800 text-center">
              <td className="p-3">{a.firstName} {a.lastName}</td>
              <td>{a.phone}</td>
              <td>
                <select
                  value={a.status || "pending"}
                  onChange={e => updateStatus(a.id, e.target.value)}
                  className="bg-slate-800 rounded px-2 py-1"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="done">Done</option>
                </select>
              </td>
              <td>
                <button onClick={() => remove(a.id)} className="text-red-400">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
