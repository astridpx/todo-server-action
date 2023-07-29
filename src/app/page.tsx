import Form from "@/components/Add-Form/Form";
import Todos from "@/components/Todos-list/Todos";

export default function Home() {
  return (
    <>
      <main className="h-screen  bg-slate-100 flex items-center justify-center">
        <section className="relative overflow-y-auto border shadow bg-white h-max max-h-[30rem] pb-4 px-8 ">
          <header className="sticky top-0 bg-white py-4">
            <h1 className="mb-8 font-bold text-2xl">Todo App</h1>

            <Form />
          </header>

          <Todos />
        </section>
      </main>
    </>
  );
}
