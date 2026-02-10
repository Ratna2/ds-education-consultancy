"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "enquiries"));
      setLeads(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    load();
  }, []);

  const filtered = leads.filter(l =>
    l.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📋 Enquiry Leads</h1>

      <input
        placeholder="Search by name"
        className="mb-4 px-4 py-2 rounded bg-slate-800"
        onChange={e => setSearch(e.target.value)}
      />

      <table className="w-full bg-slate-900 rounded-lg overflow-hidden">
        <thead className="bg-slate-800">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(l => (
            <tr key={l.id} className="border-t border-slate-800">
              <td className="p-3">{l.name}</td>
              <td>{l.email}</td>
              <td>{l.phone}</td>
              <td>{l.course}</td>
              <td className="capitalize text-indigo-400">{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
