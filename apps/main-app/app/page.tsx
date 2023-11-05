/* eslint-disable @next/next/no-img-element */
import styles from './page.module.scss';

import TailWindUISamples from './tailwind';
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-row p-5 m-5 mx-auto">
        <h1 className="text-5xl">NextJS Home Page</h1>
      </div>
      <TailWindUISamples></TailWindUISamples>
    </div>
  );
}
