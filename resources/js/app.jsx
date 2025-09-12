import React from 'react';
import { createRoot } from 'react-dom/client';
import "../css/app.css"
import { createInertiaApp } from '@inertiajs/react';
import axios from "axios";

// Setup axios untuk CSRF
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const token = document.querySelector('meta[name="csrf-token"]');
if (token) {
  axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
}

createInertiaApp({
    resolve: (name) => import(/* @vite-ignore */ `./Pages/${name}.jsx`),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});
