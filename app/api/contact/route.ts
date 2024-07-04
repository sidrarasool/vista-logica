export async function POST(req: Request) {
  const body = await req.json()

  await fetch(process.env.FORMSPREE_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  return Response.json({ message: "Hello from Next.js!" })
}
