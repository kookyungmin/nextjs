export default async function Read({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const resp = await fetch(`http://127.0.0.1:9999/topics/${id}`);
  const topic = await resp.json();

  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  )
}