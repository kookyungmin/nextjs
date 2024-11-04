'use client'
import {useParams} from "next/navigation";
import Link from "next/link";

export default function Control() {
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li><Link href={"/create"}>CREATE</Link></li>
      {id && <>
        <li><Link href={`/update/${id}`}>UPDATE</Link></li>
        <li><button>delete</button></li>
      </>}
    </ul>
  )
}