import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bgVideo from "../assets/bgvideo1.mp4";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;

        // Name validation
        if (!name) {
            setNameError("Name is required");
            isValid = false;
        } else if (name.length < 2) {
            setNameError("Name must be at least 2 characters");
            isValid = false;
        } else {
            setNameError("");
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email");
            isValid = false;
        } else {
            setEmailError("");
        }

        // Password validation
        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setErrorMessage("");

        if (!validateForm()) {
            return;
        }

        const requestData = { name, email, password };

        try {
            await axios.post("http://localhost:3001/register", requestData);
            setMessage("✅ Successfully Registered! Redirecting to login...");

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            const errorMsg = err.response?.data?.error || "❌ Registration Failed. Try Again.";
            if (errorMsg.includes("User already exists")) {
                setErrorMessage("❌ User already registered. Please login!");
            } else {
                setErrorMessage(errorMsg);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
            <video 
                autoPlay 
                muted 
                loop 
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="w-full max-w-md p-8  rounded-xl border border-white/20 shadow-2xl">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Register</h2>

                {message && (
                    <div className="bg-green-500/20 text-green-200 p-3 rounded-md mb-4 text-center">
                        {message}
                    </div>
                )}
                {errorMessage && (
                    <div className="bg-red-500/20 text-red-200 p-3 rounded-md mb-4 text-center">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            className={`w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:bg-white/30 border ${nameError ? 'border-red-500' : 'border-transparent'}`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                        {nameError && <p className="text-red-300 text-sm mt-1">{nameError}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            className={`w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:bg-white/30 border ${emailError ? 'border-red-500' : 'border-transparent'}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        {emailError && <p className="text-red-300 text-sm mt-1">{emailError}</p>}
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-white font-semibold mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className={`w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:bg-white/30 border ${passwordError ? 'border-red-500' : 'border-transparent'}`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white focus:outline-none"
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible size={20} />
                                ) : (
                                    <AiOutlineEye size={20} />
                                )}
                            </button>
                        </div>
                        {passwordError && <p className="text-red-300 text-sm mt-1">{passwordError}</p>}
                    </div>

                    <button 
                        type="submit"
                        className="w-full p-3 bg-[#f06321] opacity-90 hover:bg-[#f06321]/80 text-white rounded-md font-semibold transition-colors"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-white">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#f06321] opacity-90 hover:text-[#f06321]/80">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;