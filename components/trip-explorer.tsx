"use client";
import { useState } from "react";
import Link from "next/link";
import { tripTypes } from "@/lib/site";
import { Arrow } from "./ui";
export function TripExplorer() {
  const [active, setActive] = useState(0);
  function move(e:React.KeyboardEvent<HTMLButtonElement>,i:number){
    if(!["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(e.key))return;
    e.preventDefault();
    const next=(i+(["ArrowDown","ArrowRight"].includes(e.key)?1:tripTypes.length-1))%tripTypes.length;
    setActive(next);document.getElementById(`trip-tab-${next}`)?.focus();
  }
  return <section className="trip-explorer wrap" aria-labelledby="trip-heading">
    <div className="section-top"><h2 id="trip-heading">Every journey,<br/>considered.</h2><p>From the everyday appointment to the occasion you have been looking forward to.</p></div>
    <div className="trip-layout">
      <div className="trip-options" role="tablist" aria-label="Journey type">{tripTypes.map((trip,i) => <button role="tab" id={`trip-tab-${i}`} aria-controls={`trip-panel-${i}`} aria-selected={active===i} key={trip.name} onClick={() => setActive(i)} onKeyDown={e=>move(e,i)} tabIndex={active===i?0:-1}>{trip.name}<Arrow diagonal/></button>)}</div>
      {tripTypes.map((trip,i)=><div key={trip.name} id={`trip-panel-${i}`} role="tabpanel" aria-labelledby={`trip-tab-${i}`} hidden={active!==i} className="trip-panel"><p className="trip-description">{trip.description}</p><p className="secondary">{trip.note}</p><Link className="text-link" href={trip.href}>Explore this journey<Arrow/></Link></div>)}
    </div>
    <noscript><p>Explore <a href="/services/">all chauffeur services and trip planning options</a>.</p></noscript>
  </section>;
}
