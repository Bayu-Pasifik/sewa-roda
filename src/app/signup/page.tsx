"use client";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Car, CheckCircle, Lock, Mail, User } from "lucide-react";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Daftar - Sewaroda</title>
        <meta
          name="description"
          content="Daftar akun Sewaroda untuk menikmati layanan rental mobil premium."
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -right-48"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-48 -left-48"
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-10 rounded-2xl bg-white/50 backdrop-blur-lg shadow-2xl max-w-md w-full mx-4 border border-white/20 relative"
        >
          {/* Animated Car Icon */}
          <motion.div
            whileHover={{ rotate: -15, scale: 1.1 }}
            className="absolute -top-6 right-6 bg-primary p-3 rounded-full"
          >
            <Car className="w-8 h-8 text-white" />
          </motion.div>

          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2"
            >
              Mulai Perjalanan Anda
            </motion.h2>
            <p className="text-slate-600">Buat akun untuk akses penuh</p>
          </div>

          <form className="space-y-5">
            {/* Animated Input Fields */}
            {[
              { icon: <User />, label: "Nama Lengkap", type: "text" },
              { icon: <Mail />, label: "Email", type: "email" },
              { icon: <Lock />, label: "Password", type: "password" },
              {
                icon: <CheckCircle />,
                label: "Konfirmasi Password",
                type: "password",
              },
            ].map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <Input
                    type={field.type}
                    placeholder={field.label}
                    className="pl-12 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                    {field.icon}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full rounded-xl py-3 text-lg font-semibold transition-all group"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </form>

          {/* Social Login */}
          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/50 text-slate-600">
                Atau lanjut dengan
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["Google", "Apple"].map((provider, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border hover:bg-slate-50 cursor-pointer"
              >
                <img
                  src={`/images/icons/${provider.toLowerCase()}-logo.png`}
                  alt={provider}
                  className="w-5 h-5"
                />
                <span className="text-slate-700">{provider}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-slate-600 mt-6"
          >
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline underline-offset-4"
            >
              Masuk disini
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
