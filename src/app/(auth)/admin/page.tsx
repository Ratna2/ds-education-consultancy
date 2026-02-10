"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { exportToExcel } from "@/lib/export";

import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366F1", "#22C55E", "#F59E0B"];

export default function AdminDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const leadsSnap = await getDocs(collection(db, "enquiries"));
      const appSnap = await getDocs(collection(db, "appointments"));
      setLeads(leadsSnap.docs.map(d => d.data()));
      setAppointments(appSnap.docs.map(d => d.data()));
    };
    load();
  }, []);

  const conversion =
    leads.length > 0
      ? Math.round((appointments.length / leads.length) * 100)
      : 0;

  const funnelData = [
    { name: "Leads", value: leads.length },
    { name: "Appointments", value: appointments.length },
  ];

  const trendData = leads.map((_, i) => ({
    day: `Day ${i + 1}`,
    leads: i + 1,
  }));

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Overview & performance analytics</p>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Kpi title="Total Leads" value={leads.length} />
        <Kpi title="Appointments" value={appointments.length} />
        <Kpi title="Conversion" value={`${conversion}%`} />
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4">
        <button
          onClick={() => exportToExcel(leads, "leads")}
          className="bg-indigo-600 px-4 py-2 rounded"
        >
          Export Leads
        </button>

        <button
          onClick={() => exportToExcel(appointments, "appointments")}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Export Appointments
        </button>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LINE */}
        <div className="dashboard-card">
          <h2 className="dashboard-title">Daily Leads</h2>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <Line
                  type="monotone"
                  dataKey="leads"
                  stroke="#6366F1"
                  strokeWidth={3}
                />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* FUNNEL */}
        <div className="dashboard-card">
          <h2 className="dashboard-title">Lead Funnel</h2>
          <div className="h-[280px] flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={funnelData}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                >
                  {funnelData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* ACTIVITY LOG */}
      <div className="dashboard-card">
        <h2 className="dashboard-title">Recent Activity</h2>
        <ul className="text-slate-300 space-y-2">
          <li>🆕 New enquiry received</li>
          <li>📅 Appointment booked</li>
          <li>✅ Appointment confirmed</li>
        </ul>
      </div>

    </div>
  );
}

function Kpi({ title, value }: { title: string; value: any }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
