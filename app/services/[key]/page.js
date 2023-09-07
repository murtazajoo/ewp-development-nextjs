"use client";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import allServices from "../../lib/services";

export default function Page() {
  const { key } = useParams();
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          className="text-sm text-sky-500"
          color="inherit"
          href="/services"
        >
          services
        </Link>
        <Typography color="text.primary">{key}</Typography>
      </Breadcrumbs>
      <h1>{key.split("-").join(" ")}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    key: service.key.split(" ").join("-").toLowerCase(),
  }));
}
