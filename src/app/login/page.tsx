'use client';
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <>
      <Head>
        <title>Masuk - Sewaroda</title>
        <meta name="description" content="Masuk ke akun Sewaroda untuk menikmati layanan rental mobil premium." />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-10 rounded-2xl bg-white/30 backdrop-blur-md shadow-2xl max-w-md w-full"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
            Masuk
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-slate-800 mb-1">Email</label>
              <Input type="email" placeholder="Masukkan email" />
            </div>
            <div>
              <label className="block text-slate-800 mb-1">Password</label>
              <Input type="password" placeholder="Masukkan password" />
            </div>
            <Button type="submit" className="w-full rounded-full mt-4">
              Masuk
            </Button>
          </form>
          <p className="text-center text-slate-700 mt-4">
            Belum punya akun?{" "}
            <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
              Daftar
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}
