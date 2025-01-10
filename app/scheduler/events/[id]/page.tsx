'use client'
import { useParams } from 'next/navigation';

export default function Page() {
  const { id } = useParams();

  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {id}</p>
    </div>
  );
}
