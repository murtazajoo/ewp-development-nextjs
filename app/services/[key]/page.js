"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import allServices from "../../lib/services";

export default function Page() {
  const { key } = useParams();
  const [name, setName] = useState();
  return (
    <section className="py-20 ">
      <div className="max-w-[1200px] mx-auto  ">
        <div className="flex">
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
              label="Company"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              data-aos="zoom-out"
              label="Budget"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              helperText="In Rupees"
            />

            <FormControl fullWidth className="mt-3">
              <InputLabel id="demo-simple-select-label">
                Type Of Service{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={key}
                label="Service"
                onChange={() => {}}
                defaultValue={key}
              >
                <MenuItem value={key}>{key}</MenuItem>

                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth className="mt-3">
              <TextareaAutosize
                labelId="demo-simple-textarea-label"
                className="w-full p-2 my-5 border-2 rounded-md outline-blue-600"
                placeholder="Additional Message"
                minRows={4}
                variant="outlined"
                helperText="sdsdada"
              />
            </FormControl>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
