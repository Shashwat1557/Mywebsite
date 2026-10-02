import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";

function safeNext(v: unknown): string {
  return typeof v === "string" && v.startsWith("/") && !v.startsWith("//") ? v : "/";
}

export const Route = createFileRoute("/login")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({ next: safeNext(s['next']) }),
  head: () => ({
    meta: [
      { title: "Sign in — Arjun Mehta Portfolio" },
      { name: "description", content: "Sign in to connect an AI assistant to Arjun Mehta's portfolio." },
      { property: "og:title", content: "Sign in — Arjun Mehta Portfolio" },
      { property: "og:description", content: "Sign in to connect an AI assistant to this portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Login,
});

function Login() {
  const { next } = Route.useSearch();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const target = window.location.origin + next;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) { setMsg(error.message); setBusy(false); return; }
      window.location.href = target;
    } else {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: target } });
      setBusy(false);
      setMsg(error ? error.message : "Check your email to confirm your account.");
    }
  }

  async function google() {
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: target });
    if (r.error) { setMsg(String(r.error.message ?? r.error)); return; }
    if (r.redirected) return;
    window.location.href = target;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="w-full max-w-sm space-y-4 rounded-xl border border-border p-6">
        <h1 className="text-xl font-semibold">{mode === "in" ? "Sign in" : "Create account"}</h1>
        <Button variant="outline" className="w-full" onClick={google}>Continue with Google</Button>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" type="password" required minLength={6} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" className="w-full" disabled={busy}>{mode === "in" ? "Sign in" : "Sign up"}</Button>
        </form>
        {msg && <p role="alert" className="text-sm text-muted-foreground">{msg}</p>}
        <button className="text-sm underline" onClick={() => setMode(mode === "in" ? "up" : "in")}>
          {mode === "in" ? "No account? Sign up" : "Have an account? Sign in"}
        </button>
      </div>
    </main>
  );
}
