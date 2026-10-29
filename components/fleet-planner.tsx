"use client";
import Link from "next/link";
import { useState } from "react";
import { Arrow } from "./ui";
export function FleetPlanner(){
 const [occasion,setOccasion]=useState("Phantom ceremonial fleet"),[cars,setCars]=useState("3");
 return <section className="fleet-planner wrap" aria-label="Start your fleet proposal"><div><h2>Your occasion.<br/>Your fleet.</h2></div><label>Occasion<select value={occasion} onChange={e=>setOccasion(e.target.value)}><option>Phantom ceremonial fleet</option><option>Luxury wedding fleet</option><option>Grand opening supercar fleet</option><option>Funeral &amp; memorial procession</option><option>Business travel</option><option>Airport transfer</option><option>Vehicle rental</option></select></label><label>Requested vehicles<select value={cars} onChange={e=>setCars(e.target.value)}>{[1,2,3,4,5,6,7,8,9,10].map(n=><option key={n} value={n}>{n===1?"1 vehicle":`${n} vehicles`}</option>)}</select></label><Link className="button" href={`/contact/?trip=${encodeURIComponent(occasion)}&cars=${cars}`}>Request a proposal<Arrow/></Link></section>;
}
