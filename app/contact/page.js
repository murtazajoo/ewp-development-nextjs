"use client";
import { useState } from "react";
import { TextField, Button, Typography, Box, Divider } from "@mui/material";
import {
  EmailOutlined,
  LocationCityOutlined,
  Phone,
} from "@mui/icons-material";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography
          data-aos="zoom-out"
          variant="h4"
          align="center"
          mb={2}
          className="font-bold"
        >
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            data-aos="zoom-out"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            data-aos="zoom-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            data-aos="zoom-out"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            data-aos="zoom-out"
            variant="outlined"
            type="submit"
            color="warning"
            sx={{ mt: 2 }}
          >
            Send
          </Button>
        </form>
      </Box>
      <Divider />
      {/* add conatct us via email number or address */}
      <Box
        data-aos="zoom-out"
        sx={{
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mx: "auto",
          my: 3,
          p: 2,
        }}
      >
        <Typography className="flex" variant="body-2" align="left" mb={2}>
          <EmailOutlined className="mr-3 text-amber-500" /> &nbsp;{" "}
          <div>
            <a
              href="mailto:support@ewebsiteprovider.com"
              className="text-gray-700 underline duration-200 hover:text-sky-700"
            >
              support@ewebsiteprovider.com
            </a>{" "}
            &nbsp;{" "}
            <a
              href="mailto:ceo@ewebsiteprovider.com"
              className="text-gray-700 underline duration-200 hover:text-sky-700"
            >
              ceo@ewebsiteprovider.com
            </a>
          </div>
        </Typography>
        <Typography variant="body-2" align="left" mb={2}>
          <Phone className="mr-3 text-amber-500" />
          &nbsp;{" "}
          <a
            href="tel:+91-1234567890"
            className="text-gray-700 underline duration-200 hover:text-sky-700"
          >
            +91-1234567890
          </a>
        </Typography>
        <Typography className="flex" variant="body-2" align="left" mb={2}>
          <LocationCityOutlined className="mr-3 text-amber-500" />
          &nbsp;{" "}
          <a
            href="https://goo.gl/maps/9JXGZ4Q2Z9Z2"
            className="block text-gray-700 underline duration-200 hover:text-sky-700"
          >
            123, ABC Road, XYZ City, State, Country - 123456
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
