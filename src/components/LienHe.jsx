import { useState } from "react";
import "../App.css";

export default function ShowContact() {
    const [form, setForm] = useState({
        fullname: "",
        address: "",
        phone: "",
        email: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!form.fullname.trim()) {
            newErrors.fullname = "Họ tên không được để trống.";
        }

        if (!form.address.trim()) {
            newErrors.address = "Địa chỉ không được để trống.";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Số điện thoại không được để trống.";
        } else if (!/^0[0-9]{9}$/.test(form.phone.trim())) {
            newErrors.phone = "Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email không được để trống.";
        } else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email.trim())) {
            newErrors.email = "Email không hợp lệ.";
        }

        return newErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    };

    return (
        <div className="contact-page" style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
            <h1>Liên hệ</h1>

            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group" style={{ marginBottom: 16 }}>
                    <label htmlFor="fullname">Họ tên</label>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        value={form.fullname}
                        onChange={handleChange}
                        className="form-control"
                        style={{ width: "100%", padding: 8, marginTop: 4 }}
                    />
                    {errors.fullname && <div className="error" style={{ color: "red", marginTop: 4 }}>{errors.fullname}</div>}
                </div>

                <div className="form-group" style={{ marginBottom: 16 }}>
                    <label htmlFor="address">Địa chỉ</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={handleChange}
                        className="form-control"
                        style={{ width: "100%", padding: 8, marginTop: 4 }}
                    />
                    {errors.address && <div className="error" style={{ color: "red", marginTop: 4 }}>{errors.address}</div>}
                </div>

                <div className="form-group" style={{ marginBottom: 16 }}>
                    <label htmlFor="phone">Điện thoại</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-control"
                        style={{ width: "100%", padding: 8, marginTop: 4 }}
                    />
                    {errors.phone && <div className="error" style={{ color: "red", marginTop: 4 }}>{errors.phone}</div>}
                </div>

                <div className="form-group" style={{ marginBottom: 16 }}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control"
                        style={{ width: "100%", padding: 8, marginTop: 4 }}
                    />
                    {errors.email && <div className="error" style={{ color: "red", marginTop: 4 }}>{errors.email}</div>}
                </div>

                <button type="submit" style={{ padding: "10px 20px", background: "#0066cc", color: "white", border: "none", cursor: "pointer" }}>
                    Gửi
                </button>
            </form>

            {submitted && (
                <div style={{ marginTop: 24, padding: 16, background: "#e6ffed", border: "1px solid #8fd19e" }}>
                    <strong>Gửi liên hệ thành công!</strong>
                    <p>Họ tên: {form.fullname}</p>
                    <p>Địa chỉ: {form.address}</p>
                    <p>Điện thoại: {form.phone}</p>
                    <p>Email: {form.email}</p>
                </div>
            )}
        </div>
    );
}
