import Link from 'next/link';

export const runtime = 'edge';

export default async function Home() {

  const myDo = process.env.MY_DO;

  const doId = myDo.idFromName('my-do-name');
  const doObj = myDo.get(doId);
  const resp = await doObj.fetch(new Request('http://0.0.0.0'));
  const txt = await resp.text();

  return (
    <main>
      <h1>next-on-pages DO local demo</h1>
      <h2>DO ID: {doId.toString()}</h2>
      <h2>Response from DO:</h2>
      <p>{txt}</p>
    </main>
  )
}
