import React, { useState } from "react";
import "./index.css";

const Auth = () => {
    const [activeTab, setActiveTab] = useState("login"); // Tracks whether "login" or "register" is active
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login attempted with:", { email, password });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Register attempted with:", { email, password });
    };

    const handleForgotPassword = () => {
        alert("Forgot password functionality to be implemented.");
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-tabs">
                    <button
                        className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
                        onClick={() => setActiveTab("login")}
                    >
                        Login
                    </button>
                    <button
                        className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
                        onClick={() => setActiveTab("register")}
                    >
                        Register
                    </button>
                </div>
                {activeTab === "login" && (
                    <form onSubmit={handleLogin}>
                        <h2 className="auth-title">Login</h2>
                        <div className="form-group">
                            <label htmlFor="login-email">Email</label>
                            <input
                                id="login-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="login-password">Password</label>
                            <input
                                id="login-password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="auth-button">
                            Login
                        </button>
                        <button
                            type="button"
                            className="link-button"
                            onClick={handleForgotPassword}
                        >
                            Forgot Password?
                        </button>
                    </form>
                )}
                {activeTab === "register" && (
                    <form onSubmit={handleRegister}>
                        <h2 className="auth-title">Register</h2>
                        <div className="form-group">
                            <label htmlFor="register-email">Email</label>
                            <input
                                id="register-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="register-password">Password</label>
                            <input
                                id="register-password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-input"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        <button type="submit" className="auth-button">
                            Register
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Auth;
