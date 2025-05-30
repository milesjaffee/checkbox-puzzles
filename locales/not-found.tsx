import { redirect } from 'next/navigation';

export default function NotFoundRedirect() {
  redirect('/en/404'); // or dynamically detect user language if needed
}