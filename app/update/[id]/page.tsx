'use client'

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Update() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${params.id}`)
      .then(resp => resp.json())
      .then(result => {
        setTitle(result?.title);
        setBody(result?.body);
      });
  }, []);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const options = { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({title, body})};

    const resp = await fetch(`http://localhost:9999/topics/${params.id}`, options);
    const res = await resp.json();
    const lastId = res.id;
    router.push(`/read/${lastId}`);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <input type={"text"} name={"title"} placeholder={"title"} value={title} onChange={(e: any) => setTitle(e.target.value)}/>
      </p>
      <p>
        <textarea name={"body"} placeholder={"body"} value={body} onChange={(e: any) => setBody(e.target.value)}></textarea>
      </p>
      <p>
        <input type={"submit"} value={"update"} />
      </p>
    </form>
  )
}