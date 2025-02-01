"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Car, BadgeCheck, Shield, Clock, Zap } from "lucide-react";

export default function Home() {
  const vehicles = [
    { type: "Hatchback", price: "250k", image: "/images/car(1).png" },
    { type: "SUV", price: "450k", image: "/images/car(2).png" },
    { type: "MVP", price: "600k", image: "/images/car(3).png" },
  ];

  return (
    <>
      <Head>
        <title>Sewaroda - Next Gen Car Rental</title>
        <meta
          name="description"
          content="Pengalaman rental mobil modern dengan sentuhan digital"
        />
      </Head>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-96 -left-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute w-[600px] h-[600px] -bottom-64 -right-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative py-9">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Drive Different
            </h1>

            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Temukan sensasi berkendara premium dengan teknologi terkini dan
              pelayanan personal
            </p>

            <div className="flex gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 space-x-2">
                <Zap className="w-4 h-4" />
                <span>Mulai Sekarang</span>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Jelajahi Fitur
              </Button>
            </div>
          </motion.div>

          {/* Floating Cars Preview */}
          <div className="mt-24 grid grid-cols-3 gap-8 opacity-90">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-background/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border"
              >
                <div className="h-40 bg-muted/20 rounded-xl mb-4" />
                <img src={vehicle.image} alt={vehicle.type} />
                <h3 className="font-semibold">{vehicle.type}</h3>
                <p className="text-primary">Rp{vehicle.price}/hari</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Keunggulan</span>
              </div>
              <h2 className="text-4xl font-bold">Mengapa Sewaroda?</h2>
              <p className="text-foreground/80">
                Kombinasi sempurna antara teknologi modern dan layanan manusiawi
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Shield />, title: "Asuransi Lengkap" },
                { icon: <Clock />, title: "Bebas Batas Waktu" },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow h-48 flex items-center justify-center border-0 bg-background/80 backdrop-blur"
                >
                  <CardContent className="text-center">
                    <div className="mb-4 text-primary mx-auto">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-background/80 backdrop-blur-lg px-8 py-4 rounded-full shadow-lg mb-8">
            <span className="text-primary font-medium">Harga Transparan</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                type: "Harian",
                price: "250k",
                features: ["Bebas KM", "Asuransi", "Support 24j"],
              },
              {
                type: "Mingguan",
                price: "1.4jt",
                features: [
                  "All in Harian",
                  "Free Delivery",
                  "Priority Support",
                ],
              },
              {
                type: "Bulanan",
                price: "4.5jt",
                features: [
                  "All in Mingguan",
                  "Free Maintenance",
                  "Layanan Premium",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-background/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.type}</h3>
                <div className="text-primary text-3xl font-bold mb-6">
                  Rp{plan.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-foreground/80 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full">Pilih Paket</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated CTA */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-r from-primary to-blue-600 p-1 rounded-2xl shadow-2xl"
          >
            <div className="bg-background rounded-xl p-12">
              <h2 className="text-3xl font-bold mb-4">
                Siap Memulai Petualangan?
              </h2>
              <p className="text-foreground/80 mb-8">
                Daftar sekarang dan dapatkan akses ke promo eksklusif
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8">
                  Daftar Sekarang
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  Lihat FAQ
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
