import { redirect } from "next/navigation";

export default function Home() {
  const onFormSubmitted = async (formData: FormData) => {
    "use server";

    const userName = formData.get("username");
    const password = formData.get("password");

    if (userName === "Samir" && password === "admin") {
      redirect("/bondsForSale");
    }
  };

  return (
    <main className="bg-white min-h-screen w-full flex justify-center">
      <div className="flex items-center justify-center max-w-7xl w-full min-h-full">
        <form
          className="flex flex-col gap-4 text-black border-2 px-8 py-10 rounded-md text-center shadow-lg"
          action={onFormSubmitted}
        >
          <h1>Log In</h1>
          <input
            type="text"
            placeholder="Username"
            className="border-2 rounded-md px-4 py-2"
            name="username"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 rounded-md px-4 py-2"
            name="password"
          />
          <button className="border-2 rounded-md px-4 py-2">Log In</button>
        </form>
      </div>
    </main>
  );
}
