"use client";
import {
  Autocomplete,
  Button,
  FormControl,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import allServices from "../../lib/services";

export default function Page() {
  const { key } = useParams();
  const [name, setName] = useState();
  const services = useMemo(
    () =>
      allServices.map((service) => {
        return {
          label: service.service,
        };
      }),
    []
  );
  return (
    <section className="py-20 bg-pattern-light ">
      <div className="max-w-[1200px] mx-auto bg-white p-5 rounded-3xl bg-opacity-30 backdrop-blur-sm shadow">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row">
          <div className="w-1/3">
            <h3 className="text-3xl font-bold">Service Order</h3>
          </div>
          <div className="w-2/3">
            <TextField
              fullWidth
              data-aos="zoom-out"
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              helperText="Some important text"
            />

            <div className="flex flex-col gap-2 md:flex-row">
              <TextField
                fullWidth
                data-aos="zoom-out"
                label="Email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                data-aos="zoom-out"
                label="Phone"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                helperText="Use your WhatsApp number"
              />
            </div>

            <TextField
              fullWidth
              data-aos="zoom-out"
              label="Company (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              data-aos="zoom-out"
              label="Budget (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              helperText="In Rupees"
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              className="mt-4 capitalize"
              options={services}
              defaultValue={key.split("-").join(" ")}
              renderInput={(params) => (
                <TextField {...params} label="Type of Service " />
              )}
            />

            <FormControl fullWidth className="mt-5 ">
              <Typography
                variant="body2"
                className="px-1 text-gray-400 capitalize"
              >
                Additional Message
              </Typography>
              <TextareaAutosize
                className="w-full p-2 bg-transparent border-2 rounded-md outline-blue-600"
                placeholder="I also want ....."
                minRows={4}
                variant="outlined"
                helperText="sdsdada"
              />
            </FormControl>

            <div className="flex justify-end mt-5">
              <Button variant="outlined" size="large" href="/contact">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
