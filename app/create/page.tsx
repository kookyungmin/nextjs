'use client'

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({title, body})};

    const resp = await fetch(`http://localhost:9999/topics`, options);
    const res = await resp.json();
    const lastId = res.id;
    router.push(`/read/${lastId}`);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <input type={"text"} name={"title"} placeholder={"title"} />
      </p>
      <p>
        <textarea name={"body"} placeholder={"body"}></textarea>
      </p>
      <p>
        <input type={"submit"} value={"create"} />
      </p>
    </form>
  )
}