import FormLogin from "@/components/FormLogin";

export default function Login() {
  return (
    <main className="p-3 min-h-flex flex justify-center items-center">
      
      <div className="w-full max-w-[600px] p-3 border-2 border-zinc-300 rounded-lg">
        <h1 className="text-center text-2xl font-medium">Login</h1>
       <FormLogin/>
      </div>
    </main>
  );
}
