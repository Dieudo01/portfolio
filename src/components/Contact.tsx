import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!form.current) return;

        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            )
            .then(() => {
                alert("Message envoyé avec succès \n à \n IR DIEUDONNE BASA");
                form.current?.reset();
            })
            .catch(() => {
            alert("Erreur lors de l'envoie du méssage \n à \n IR DIEUDONNE BASA")
        })
    }
    return (
        <section id="contact" className="py-5 mt-5 mb-4 ">
            <div className="container mt-5">
                <div className="text-center mb-5 border-bottom">
                    <h2 className="fw-bold">Contact</h2>
                    <p className="text-muted">N'hesitez pas à me contacter</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        
                        {/* Formulaire de Contacte  */}

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                {/* <label htmlFor="user_name" className="form-label">Nom</label> */}
                                <p className="text-muted">Veuillez remplir vos informations</p>
                                <input type="text"
                                    name="" id="name"
                                    className="form-control"
                                    placeholder="Votre nom complet"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                {/* <label htmlFor="email" className="form-label">Email</label> */}
                                <input type="email"
                                    name="email" id="email"
                                    className="form-control"
                                    placeholder="Votre email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label ">Objectif du message</label>
                                <select name="title" id="title" className="form-control form-select" required>
                                    <option value="Contact personnel">Contact personnel</option>
                                    <option value="Demande de dévis">Demande un Dévis</option>
                                    <option value="Information supplémentaire">Information supplémentaire</option>
                                    <option value="Autre">Autre services </option>
                                </select>
                            </div>
                            <div className="mb-3">
                                {/* <label htmlFor="message" className="form-label">Message</label> */}
                                <textarea name="message"
                                    id="message"
                                    className="form-control"
                                    rows={5}
                                    placeholder="Votre message..."></textarea>
                                    </div>
                                <button className="btn btn-primary bg-dark"
                                    type="submit"
                                    title="Envoyer un Message"
                                >Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}