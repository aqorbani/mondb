import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const clickHandler = async () => {
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h2>MongoDB</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
        />
        <button onClick={clickHandler}>send</button>
      </div>
    </div>
  );
}
