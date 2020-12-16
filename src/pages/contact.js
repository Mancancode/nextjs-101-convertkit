import Head from "next/head";
import Link from "next/link"

export default function Contact() {
    return (
        <div>
            <Head>
                <title>contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="min-h-screen flex flex-col justify-center">
                <img
                    className="m-auto my-4 w-24 sm:w-auto"
                    alt="Ihatetomatoes"
                    src="/assets/img_logo.svg"
                />
                <h1 className="mx-auto text-4xl font-bold">Welcome to Next.js contact!</h1>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </main>
        </div>
    );
}
