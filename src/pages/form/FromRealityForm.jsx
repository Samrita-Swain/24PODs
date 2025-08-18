import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const FromRealityForm = () => {
    const formRef = useRef();
    const awardsRef = useRef();

    const [urlError, setUrlError] = useState("");
    const [fileError, setFileError] = useState("");
    const [statusMsg, setStatusMsg] = useState("");
    const [statusType, setStatusType] = useState(null); // "success" | "error" | null
    const [sending, setSending] = useState(false);

    const MAX_PDF_BYTES = 2 * 1024 * 1024; // 2 MB

    const isValidHttpUrl = (value) => {
        if (!value) return false;
        try {
            const u = new URL(value);
            return u.protocol === "http:" || u.protocol === "https:";
        } catch {
            return false;
        }
    };

    const handleUrlInput = (e) => {
        const v = e.target.value.trim();
        if (!v) {
            setUrlError("");
            return;
        }
        if (!isValidHttpUrl(v)) {
            setUrlError("Enter a valid http:// or https:// link.");
        } else {
            setUrlError("");
        }
    };

    const handlePdfChange = (e) => {
        setFileError("");
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.type !== "application/pdf") {
            setFileError("Only PDF files are allowed.");
            e.target.value = "";
            return;
        }

        if (file.size > MAX_PDF_BYTES) {
            setFileError(`PDF must be ≤ ${Math.round(MAX_PDF_BYTES / 1024 / 1024)} MB.`);
            e.target.value = "";
            return;
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate podcast link strictly
        const linkValue = formRef.current?.user_podcast_link?.value?.trim();
        if (!isValidHttpUrl(linkValue)) {
            setUrlError("Please provide a valid http:// or https:// podcast link.");
            return;
        }

        // Validate file again if present
        const file = awardsRef.current?.files?.[0];
        if (file) {
            if (file.type !== "application/pdf") {
                setFileError("The awards file must be a PDF.");
                return;
            }
            if (file.size > MAX_PDF_BYTES) {
                setFileError(`The awards PDF must be ≤ ${Math.round(MAX_PDF_BYTES / 1024 / 1024)} MB.`);
                return;
            }
        }

        setSending(true);
        setStatusMsg("");
        setStatusType(null);

        // REPLACE these with your EmailJS values
        const SERVICE_ID = "service_4wdm6ur";
        const TEMPLATE_ID = "template_bcoje3z";
        const PUBLIC_KEY = "QqczI38sL9rl5jExp";

        // sendForm will include file inputs automatically if the form has them
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                () => {
                    setStatusType("success");
                    setStatusMsg("✅ Thanks! We received your request — we’ll contact you soon.");
                    formRef.current.reset();
                    if (awardsRef.current) awardsRef.current.value = "";
                    setFileError("");
                    setUrlError("");
                },
                (err) => {
                    console.error("EmailJS error:", err);
                    setStatusType("error");
                    setStatusMsg("❌ Something went wrong. Please try again later.");
                }
            )
            .finally(() => setSending(false));
    };

    return (
        <div className="fr-form-wrap">
            <div className="text-section" data-aos="flip-up">
                <img src="images/join-us.png" alt="" />
            </div>
            <div className="fr-card" data-aos="zoom-in">

                <form ref={formRef} onSubmit={sendEmail} className="fr-form" noValidate>
                    <div className="fr-row">
                        <label className="fr-label">
                            <h1>Full name <span style={{ color: "rgb(225, 4, 4)", marginLeft: "5px" }}>*</span></h1>
                            <input name="form_name" type="text" required />
                        </label>

                        <label className="fr-label">
                            <h1>Business name <span style={{ color: "rgb(225, 4, 4)", marginLeft: "5px" }}>*</span></h1>
                            <input name="form_business" type="text" />
                        </label>
                    </div>

                    <div className="fr-row">
                        <label className="fr-label full">
                            <h1>Your expertise & experience <span style={{ color: "rgb(225, 4, 4)", marginLeft: "5px" }}>*</span></h1>
                            <textarea name="form_experience" rows="4" required />
                        </label>
                    </div>

                    <div className="fr-row">
                        <label className="fr-label full">
                            <h1> Link to last few podcast where you were guest <span style={{ color: "rgb(225, 4, 4)", marginLeft: "5px" }}>*</span></h1>
                            <input
                                name="user_podcast_link"
                                type="url"
                                placeholder="https://example.com/episode"
                                onInput={handleUrlInput}
                                required
                            />
                            {urlError && <small className="fr-error">{urlError}</small>}
                        </label>
                    </div>

                    <div className="fr-row">
                        <label className="fr-label">
                            Any awards (PDF, max {Math.round(MAX_PDF_BYTES / 1024 / 1024)} MB)
                            <input
                                ref={awardsRef}
                                name="awards_pdf"
                                type="file"
                                accept="application/pdf"
                                onChange={handlePdfChange}
                            />
                            {fileError && <small className="fr-error">{fileError}</small>}
                        </label>
                    </div>

                    <div className="fr-row">
                        <label className="fr-label full">
                            Why us?
                            <textarea name="message" rows="4" placeholder="Why would you like to be our guest?" />
                        </label>
                    </div>

                    <div className="fr-actions">
                        <button type="submit" className="fr-btn" disabled={sending}>
                            {sending ? "Sending…" : "Submit"}
                        </button>

                        {statusType && (
                            <div className={`fr-status ${statusType === "success" ? "ok" : "err"}`} role="status">
                                {statusMsg}
                            </div>
                        )}
                    </div>

                    <p className="fr-note">🔒 We respect your privacy — no spam, ever.</p>
                </form>
            </div>
        </div>
    );
};
