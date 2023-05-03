import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//   const data = {
//     name:"Joe"
//   }
//   return NextResponse.json(data);
// }

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}